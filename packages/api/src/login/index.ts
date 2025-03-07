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
  >("/api/auth/login", {
    employeeId,
    password,
  });

  console.log("🔹 Login Response:", response);

  return response.data;
};
