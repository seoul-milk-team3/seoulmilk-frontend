import { AxiosResponse } from "axios";
import {axiosInstance} from "../instance";
import {  PostTaxInvoiceOCRResponse } from "./types";

/**
 * 세금계산서 OCR 분석 API 요청 함수
 */
export const postTaxInvoiceOCR = async (formData: FormData) => {
  console.log("📤 전송 전 FormData 확인:", [...formData.entries()]);

  const response = await axiosInstance.post<FormData, AxiosResponse<PostTaxInvoiceOCRResponse>>(
      "/tax-invoices/ocr",
      formData
    );
    console.log("📤 전송 후 FormData 확인:", [...formData.entries()]);

    

  console.log("🔹 OCR Response:", response.data);
  return response.data;
};

