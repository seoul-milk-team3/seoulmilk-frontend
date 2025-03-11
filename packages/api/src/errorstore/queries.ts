import { useMutation } from "@tanstack/react-query";

import { TaxInvoiceRequest } from "./types";
import { postModifiedTaxInvoice } from ".";

/**
 * 수정된 세금 계산서를 저장하는 Mutation Hook
 */
export const useSaveModifiedTaxInvoice = () => {
  return useMutation({
    mutationFn: ({
      taxId,
      requestData,
    }: {
      taxId: number;
      requestData: TaxInvoiceRequest;
    }) => postModifiedTaxInvoice(taxId, requestData),
  });
};
