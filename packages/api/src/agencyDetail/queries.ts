import { useQuery } from "@tanstack/react-query";
import { TaxInvoiceDetail } from "./types";
import { fetchTaxInvoiceDetail } from ".";

export const useAgencyTaxInvoiceDetailQuery = (
  taxId: number,
  isOpen: boolean
) => {
  return useQuery<TaxInvoiceDetail>({
    queryKey: ["taxInvoiceDetail", taxId],
    queryFn: () => fetchTaxInvoiceDetail(taxId),
    enabled: isOpen && !!taxId, // 모달이 열릴 때만 요청
    staleTime: 5000,
  });
};
