import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { AxiosError } from "axios";
import { HTTP_STATUS_CODE } from "@seoulmilk/utils";
import { postLogin } from ".";
import { axiosInstance } from "../instance";
import { REFRESH_TOKEN_KEY, USER_ID_KEY } from "@seoulmilk/utils";
import { PostLoginRequestBody } from "./types";

/**
 * 로그인 Mutation 훅
 */
export const useLoginMutation = (setError: any) => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: (data: PostLoginRequestBody) => postLogin(data),

    onSuccess: ({ accessToken, refreshToken }) => {
      if (!accessToken || !refreshToken) {
        console.error("⚠️ 로그인 성공했지만 토큰이 없음.");
        setError("employeeId", {
          message: "서버에서 인증 토큰을 받지 못했습니다. 다시 시도해주세요.",
        });
        return;
      }

      // ✅ 토큰 저장
      localStorage.setItem(USER_ID_KEY, accessToken);
      localStorage.setItem(REFRESH_TOKEN_KEY, refreshToken);

      // ✅ Axios 기본 헤더 설정
      axiosInstance.defaults.headers.Authorization = `Bearer ${accessToken}`;

      navigate("/");
    },

    onError: (error: AxiosError) => {
      console.error("Login Error:", error);

      if (!error.response) {
        setError("employeeId", {
          message: "네트워크 오류가 발생했습니다. 다시 시도해주세요.",
        });
        return;
      }

      const { status } = error.response;

      if (status === HTTP_STATUS_CODE.INTERNAL_SERVER_ERROR) {
        setError("employeeId", { message: "입력하신 사번을 찾을 수 없어요!" });
        setError("password", { message: "비밀번호가 올바르지 않아요." });
        return;
      }
    },
  });
};
