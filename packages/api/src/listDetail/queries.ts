import { useQuery } from "@tanstack/react-query";
import { fetchTaxInvoiceDetail } from ".";

export const useTaxInvoiceDetailQuery = (taxId: number) => {
  return useQuery({
    queryKey: ["taxInvoiceDetail", taxId],
    queryFn: () => fetchTaxInvoiceDetail(taxId),
    enabled: !!taxId, // taxId가 있을 때만 실행
    staleTime: 10000, // 10초 동안 데이터 유지
  });
};
