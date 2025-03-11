import { useQuery } from "@tanstack/react-query";
import { fetchErrorDetail } from ".";

export const useErrorDetailQuery = (taxId: number) => {
  return useQuery({
    queryKey: ["ErrorDetail", taxId],
    queryFn: () => fetchErrorDetail(taxId),
    enabled: !!taxId, // taxId가 있을 때만 실행
    staleTime: 10000, // 10초 동안 데이터 유지
  });
};
