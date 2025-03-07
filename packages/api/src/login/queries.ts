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

    onSuccess: ({ data: { accessToken, refreshToken } }) => {
      // 토큰 저장
      localStorage.setItem(USER_ID_KEY, accessToken);
      localStorage.setItem(REFRESH_TOKEN_KEY, refreshToken);

      // Axios 헤더 설정
      axiosInstance.defaults.headers.Authorization = `Bearer ${accessToken}`;
      navigate("/");
    },

    onError: (error: AxiosError) => {
      console.error("Login Error:", error);

      if (!error.response) return;
      const { status } = error.response;

      if (status === HTTP_STATUS_CODE.INTERNAL_SERVER_ERROR) {
        setError("employeeId", { message: "입력하신 사번을 찾을 수 없어요!" });
        setError("password", { message: "비밀번호가 올바르지 않아요." });
        return;
      }
      /* if (status === HTTP_STATUS_CODE.INTERNAL_SERVER_ERROR) {
        setError("password", { message: "비밀번호가 올바르지 않아요." });
        return;
      }*/

      setError("employeeId", {
        message: "로그인 중 오류가 발생했습니다. 다시 시도해주세요.",
      });
    },
  });
};
