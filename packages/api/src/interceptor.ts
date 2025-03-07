import { HTTP_STATUS_CODE } from "@seoulmilk/utils";
import { AxiosError, InternalAxiosRequestConfig, AxiosHeaders } from "axios";
import axios from "axios";
import { HTTPError } from "./HTTPError";
import { USER_ID_KEY, REFRESH_TOKEN_KEY } from "@seoulmilk/utils";

interface ErrorResponse {
  message?: string;
  code?: number;
}

/**
 * 요청 인터셉터 - Access Token을 헤더에 추가
 */
export const handleCheckAndSetToken = (config: InternalAxiosRequestConfig) => {
  console.log("📡 Axios Request URL:", config.baseURL);
  const accessToken = localStorage.getItem(USER_ID_KEY);
  if (accessToken) {
    config.headers.Authorization = accessToken; // Bearer 없이 전송
  }
  return config;
};

/**
 * 응답 인터셉터 - 401 발생 시 Refresh Token 추가하여 기존 요청 재시도
 */
export const handleAPIError = async (error: AxiosError<ErrorResponse>) => {
  if (!error.response) {
    throw new HTTPError(0, "네트워크 오류 발생");
  }

  const { config, response } = error;
  const { data, status } = response;
  console.log("로그인에러", response);

  if (status === HTTP_STATUS_CODE.UNAUTHORIZED) {
    const refreshToken = localStorage.getItem(REFRESH_TOKEN_KEY);

    if (refreshToken && config) {
      try {
        // config.headers가 undefined일 경우 AxiosHeaders 객체로 초기화
        if (!config.headers) {
          config.headers = new AxiosHeaders();
        }

        config.headers["Authorization-Refresh"] = refreshToken;

        return axios(config); // 기존 요청 재시도
      } catch (refreshError) {
        console.error("토큰 갱신 실패:", refreshError);
        localStorage.removeItem(USER_ID_KEY);
        localStorage.removeItem(REFRESH_TOKEN_KEY);
        throw new HTTPError(HTTP_STATUS_CODE.UNAUTHORIZED, "토큰 갱신 실패");
      }
    }
  }

  // 500 에러 처리
  /*if (status >= HTTP_STATUS_CODE.INTERNAL_SERVER_ERROR) {
    throw new HTTPError(
      HTTP_STATUS_CODE.INTERNAL_SERVER_ERROR,
      data?.message || "서버 오류 발생"
    );
  }*/

  if (status >= HTTP_STATUS_CODE.INTERNAL_SERVER_ERROR) {
    //console.error("⚠️ 서버 내부 오류 발생:", data?.message || "서버 오류 발생");
    return Promise.reject(error); // 500 에러는 AxiosError 그대로 유지
  }

  return Promise.reject(
    new HTTPError(status, data?.message || "알 수 없는 오류 발생")
  );
  //throw new HTTPError(status, data?.message || "알 수 없는 오류 발생");
};
