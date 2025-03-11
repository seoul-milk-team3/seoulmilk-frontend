import { axiosInstance } from "../instance";
import {
  TaxInvoiceBeforeValidation,
  TaxInvoicesBeforeValidationResponse,
} from "./types";

export const fetchTaxInvoicesBeforeValidation = async ({
  page,
  size,
}: {
  page: number;
  size: number;
}): Promise<{ data: TaxInvoiceBeforeValidation[]; totalPageSize: number }> => {
  const response = await axiosInstance.get<TaxInvoicesBeforeValidationResponse>(
    "/tax-invoices/list/before-validation",
    { params: { page, size } }
  );

  console.log("진위여부 확인 전 리스트", response.data);

  return {
    data: response.data.data.beforeValidateTaxResponses, // ✅ 변경된 응답 구조 반영
    totalPageSize: response.data.data.totalPageSize, // ✅ totalPageSize 추가
  };
};
