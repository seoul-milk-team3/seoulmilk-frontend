import { axiosInstance } from "../instance";
import { AxiosResponse } from "axios";
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
