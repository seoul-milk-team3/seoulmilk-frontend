import { HTTP_STATUS_CODE } from "@seoulmilk/utils";
import { AxiosError, InternalAxiosRequestConfig } from "axios";
import axios from "axios";
import { USER_ID_KEY, REFRESH_TOKEN_KEY } from "@seoulmilk/utils";

/**
 * 요청 인터셉터 - Access Token을 헤더에 추가
 */

export const handleCheckAndSetToken = (config: InternalAxiosRequestConfig) => {
  // 로그인 요청이라면 Authorization 헤더를 추가하지 않음

  if (
    config.url?.includes("/auth/login/office") ||
    config.url?.includes("/auth/login/branch") ||
    config.url?.includes("/auth/office/sign-up") ||
    config.url?.includes("/auth/branch/sign-up")
  ) {
    return config;
  }
  const accessToken = localStorage.getItem(USER_ID_KEY);

  console.log("📡 인터셉터 - 저장된 액세스 토큰:", accessToken);

  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }

  return config;
};

/**
 * 응답 인터셉터 - 401 발생 시 Refresh Token을 사용하여 기존 요청 재시도
 */
export const handleAPIError = async (error: AxiosError) => {
  if (!error.response) {
    console.error("⚠️ 서버 응답이 없음 (네트워크 오류 또는 서버 다운)");
    return Promise.reject(
      new Error("서버 응답이 없습니다. 네트워크 상태를 확인해주세요.")
    );
  }

  const { config, response } = error;
  const { status } = response;

  if (status === HTTP_STATUS_CODE.UNAUTHORIZED) {
    const refreshToken = localStorage.getItem(REFRESH_TOKEN_KEY);

    if (!refreshToken) {
      console.error("🔴 Refresh Token이 없습니다. 다시 로그인 필요.");
      localStorage.removeItem(USER_ID_KEY);
      localStorage.removeItem(REFRESH_TOKEN_KEY);
      window.location.href = "/login";
      return Promise.reject(error);
    }

    // ✅ `config`가 없으면 로그아웃 처리
    if (!config) {
      console.error("🚨 기존 요청 정보가 없어 재시도를 할 수 없습니다.");
      localStorage.removeItem(USER_ID_KEY);
      localStorage.removeItem(REFRESH_TOKEN_KEY);
      window.location.href = "/login";
      return Promise.reject(
        new Error("인증이 만료되었습니다. 다시 로그인해주세요.")
      );
    }

    try {
      console.log("🔄 액세스 토큰 갱신 시도...");

      // ✅ 기존 요청에 리프레시 토큰 추가 후 다시 요청 (config의 method 유지)
      const updatedConfig = {
        ...config,
        headers: {
          ...config.headers,
          "Authorization-Refresh": `Bearer ${refreshToken}`,
        },
      };

      const tokenResponse = await axios.request(updatedConfig);

      // ✅ 갱신된 토큰 가져오기
      const newAccessToken = tokenResponse.headers["authorization"]?.replace(
        "Bearer ",
        ""
      );
      const newRefreshToken = tokenResponse.headers[
        "authorization-refresh"
      ]?.replace("Bearer ", "");

      if (!newAccessToken || !newRefreshToken) {
        console.error(
          "🚨 토큰 갱신 실패: 서버에서 새로운 토큰을 반환하지 않음."
        );
        localStorage.removeItem(USER_ID_KEY);
        localStorage.removeItem(REFRESH_TOKEN_KEY);
        window.location.href = "/login";
        return Promise.reject(error);
      }

      // ✅ 새로운 토큰 저장
      localStorage.setItem(USER_ID_KEY, newAccessToken);
      localStorage.setItem(REFRESH_TOKEN_KEY, newRefreshToken);

      // ✅ 기존 요청을 새 토큰으로 다시 보냄
      updatedConfig.headers.Authorization = `Bearer ${newAccessToken}`;
      return axios.request(updatedConfig);
    } catch (refreshError) {
      console.error("🔴 토큰 갱신 실패:", refreshError);
      localStorage.removeItem(USER_ID_KEY);
      localStorage.removeItem(REFRESH_TOKEN_KEY);
      window.location.href = "/login";
      return Promise.reject(refreshError);
    }
  }

  return Promise.reject(error);
};
