import { postModifiedTaxInvoice } from "./index";
import { TaxInvoiceRequest } from "./types";

/**
 * 수정된 세금 계산서를 저장하는 함수
 * @param taxId - 수정할 세금 계산서 ID
 * @param requestData - 세금 계산서 요청 데이터
 * @returns 성공 여부 및 응답 데이터
 */
export const saveModifiedTaxInvoice = async (
  taxId: number,
  requestData: TaxInvoiceRequest
) => {
  try {
    const response = await postModifiedTaxInvoice(taxId, requestData);
    return response;
  } catch (error) {
    console.error("Failed to save modified tax invoice:", error);
    throw error;
  }
};
