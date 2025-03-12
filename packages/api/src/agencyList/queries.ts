import { useQuery } from "@tanstack/react-query";
import { TaxInvoiceFilters, TaxInvoicesResponse } from "./types";
import { fetchTaxInvoices } from ".";

export const useAgencyTaxInvoicesQuery = (filters: TaxInvoiceFilters) => {
  const isDateFilterActive = !!filters.startDate && !!filters.endDate; // 두 날짜가 선택된 경우만 true

  return useQuery<TaxInvoicesResponse>({
    queryKey: ["taxInvoices", filters],
    queryFn: () => fetchTaxInvoices(filters),
    enabled: isDateFilterActive || (!filters.startDate && !filters.endDate),
    staleTime: 5000,
    placeholderData: (previousData) => previousData, // 기존 데이터 유지
  });
};
