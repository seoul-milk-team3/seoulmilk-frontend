import { AxiosResponse } from "axios";
import { axiosInstance } from "../instance";
import { PostLoginRequestBody, PostLoginResponse } from "./types";

/**
 * 로그인 API 요청 함수
 */
export const postLogin = async ({
  employeeId,
  password,
}: PostLoginRequestBody) => {
  const response = await axiosInstance.post<
    PostLoginRequestBody,
    AxiosResponse<PostLoginResponse>
  >("/auth/login/office", { employeeId, password });

  console.log("🔹 Login Response:", response);

  const headers = response.headers;
  console.log("헤더", headers);
  const rawAccessToken = headers?.["authorization"];
  const rawRefreshToken = headers?.["authorization-refresh"];

  // ✅ 헤더 또는 응답 본문에서 토큰 가져오기
  const accessToken = rawAccessToken?.replace("Bearer ", "") || null;
  const refreshToken = rawRefreshToken?.replace("Bearer ", "") || null;

  console.log("🔹 액세스 토큰:", accessToken);
  console.log("🔹 리프레쉬 토큰:", refreshToken);

  if (!accessToken || !refreshToken) {
    console.error("🚨 서버가 토큰을 반환하지 않음. 백엔드와 확인 필요.");
    throw new Error("서버에서 인증 토큰을 받지 못했습니다. 다시 시도해주세요.");
  }

  return { accessToken, refreshToken };
};
