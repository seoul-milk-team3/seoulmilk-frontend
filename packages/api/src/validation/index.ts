import {
  ApiResponse,
  PostVerificationResponse,
  PreVerificationRequest,
} from "./types";
import { axiosInstance } from "../instance";

// 간편 인증 전 세금계산서 검증 요청 API
export const requestPreVerification = async ({
  loginTypeLevel,
  selectedIds,
}: PreVerificationRequest) => {
  const response = await axiosInstance.post<ApiResponse<string>>(
    `/tax/validation/pre-verified/${loginTypeLevel}`,
    selectedIds
  );

  console.log("간편 인증 전 세금계산서 검증 요청 API", response.data);
  return response.data;
};

// 간편 인증 완료 후 세금계산서 검증 API
export const requestPostVerification = async (
  selectedIds: { id: number }[]
) => {
  const response = await axiosInstance.post<PostVerificationResponse>(
    `/tax/validation/post-verified`,
    selectedIds
  );

  console.log("간편 인증 완료 후 세금계산서 검증 API", response.data);
  return response.data;
};
