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
}): Promise<TaxInvoiceBeforeValidation[]> => {
  const response = await axiosInstance.get<TaxInvoicesBeforeValidationResponse>(
    "/tax-invoices/list/before-validation",
    { params: { page, size } }
  );

  console.log("진위여부 확인전 리스트", response.data);

  return response.data.data;
};
