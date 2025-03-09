import { axiosInstance } from "../instance";
import { AxiosResponse } from "axios";
import {
  SignupBranchRequestBody,
  SignupRequestBody,
  SignupResponse,
} from "./types";
/**
 * 회원가입 API 요청 함수
 */
export const postSignup = async (data: SignupRequestBody) => {
  const response = await axiosInstance.post<
    SignupRequestBody,
    AxiosResponse<SignupResponse>
  >("/auth/office/sign-up", data);

  console.log("서버 응답값", response);
  return response.data;
};

export const postBranchSignup = async (data: SignupBranchRequestBody) => {
  const response = await axiosInstance.post<
    SignupBranchRequestBody,
    AxiosResponse<SignupResponse>
  >("/auth/branch/sign-up", data);

  console.log("서버 응답값", response);
  return response.data;
};
