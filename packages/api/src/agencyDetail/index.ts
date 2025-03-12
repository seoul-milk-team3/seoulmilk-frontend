import { get } from "../instance";
import { TaxInvoiceDetail } from "./types";

// 세금 계산서 상세 조회 API (쿼리 파라미터 추가)
export const fetchTaxInvoiceDetail = async (taxId: number) => {
  const response = await get<{ data: TaxInvoiceDetail }>(
    `/tax-invoices/branch/${taxId}?taxId=${taxId}` // ✅ 쿼리 파라미터 추가
  );
  console.log("📤 상세 API 응답:", response.data);
  return response.data;
};
