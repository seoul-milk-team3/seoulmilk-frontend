import { TaxInvoiceRequest, TaxInvoiceResponse } from "./types";
import { axiosInstance } from "../instance";

/**
 * 수정된 세금 계산서를 저장하는 API 호출 함수
 * @param taxId - 세금 계산서 ID
 * @param requestData - 세금 계산서 요청 데이터
 * @returns 응답 데이터
 */
export const postModifiedTaxInvoice = async (
  taxId: number,
  requestData: TaxInvoiceRequest
): Promise<TaxInvoiceResponse> => {
  const formData = new FormData();
  formData.append("requestList", JSON.stringify(requestData));

  const response = await axiosInstance.post<TaxInvoiceResponse>(
    `/tax-invoices/office?taxId=${taxId}`,
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );
  console.log("세금계산서 저장 API 응답:", JSON.stringify(response.data, null, 2));

  return response.data;
};
