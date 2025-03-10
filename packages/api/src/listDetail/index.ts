import { axiosInstance } from "../instance";
import { TaxInvoiceDetailResponse } from "./types";

// 세금 계산서 상세 데이터 가져오기
export const fetchTaxInvoiceDetail = async (taxId: number) => {
  const response = await axiosInstance.get<{ data: TaxInvoiceDetailResponse }>(
    `/tax-invoices/office?taxId=${taxId}`
  );

  console.log("리스트 상세보기", response.data);
  return response.data.data;
};
