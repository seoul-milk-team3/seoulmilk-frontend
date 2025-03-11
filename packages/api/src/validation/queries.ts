import { useMutation } from "@tanstack/react-query";
import { PostVerificationResponse, PreVerificationRequest } from "./types";
import { requestPostVerification, requestPreVerification } from ".";

// 간편 인증 전 세금계산서 검증 요청 훅
export const usePreVerification = () => {
  return useMutation({
    mutationFn: (params: PreVerificationRequest) =>
      requestPreVerification(params),
  });
};

//  간편 인증 완료 후 세금계산서 검증 요청 훅
export const usePostVerification = () => {
  return useMutation<PostVerificationResponse, Error, { id: number }[]>({
    mutationFn: (selectedIds) => requestPostVerification(selectedIds),
  });
};
