import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { HTTP_STATUS_CODE } from "@seoulmilk/utils";
import { postTaxInvoiceOCR } from "./index";

/**
 * 세금계산서 OCR 분석 Mutation 훅
 */
export const useTaxInvoiceOCRMutation = () => {
  return useMutation({
    mutationFn: (formData: FormData) => postTaxInvoiceOCR(formData),

    onError: (error: AxiosError) => {
      console.error("OCR 분석 오류:", error);

      if (!error.response) {
        console.error("❌ 네트워크 오류 발생. 다시 시도해주세요.");
        return;
      }

      const { status } = error.response;

      if (status === HTTP_STATUS_CODE.BAD_REQUEST) {
        console.error("❌ 유효한 파일을 업로드해주세요.");
        return;
      }

      if (status === HTTP_STATUS_CODE.INTERNAL_SERVER_ERROR) {
        console.error("❌ OCR 분석 중 오류 발생. 다시 시도해주세요.");
        return;
      }
    },
  });
};
