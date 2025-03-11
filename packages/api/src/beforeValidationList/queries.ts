import { useQuery } from "@tanstack/react-query";
import { TaxInvoiceBeforeValidation } from "./types";
import { fetchTaxInvoicesBeforeValidation } from ".";

export const useTaxInvoicesQueryBeforeValidation = ({
  page,
  size,
}: {
  page: number;
  size: number;
}) => {
  return useQuery<{
    data: TaxInvoiceBeforeValidation[];
    totalPageSize: number;
  }>({
    queryKey: ["taxInvoicesBeforeValidation", page, size],
    queryFn: () => fetchTaxInvoicesBeforeValidation({ page, size }),
    staleTime: 5000,
  });
};
