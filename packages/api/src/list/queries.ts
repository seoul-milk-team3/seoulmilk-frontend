import { useQuery } from "@tanstack/react-query";
import { format, lastDayOfMonth, parse } from "date-fns";
import { fetchTaxInvoices } from ".";
import { regionMap, statusMap } from "./types";

// 상태 값 타입 정의 (정확한 타입 적용)
type StatusType = "NORMAL" | "ABNORMAL" | "ALL" | "처리 결과" | "전체";

// 날짜 변환 유틸 (YYYY-MM-01 형식으로 변환)
const getStartOfMonth = (dateStr?: string) => {
  if (!dateStr || dateStr === "날짜") return undefined;
  return `${dateStr}-01`;
};

// 날짜 변환 유틸 (YYYY-MM-최대일 형식으로 변환)
const getEndOfMonth = (dateStr?: string) => {
  if (!dateStr || dateStr === "날짜") return undefined;
  const date = parse(dateStr, "yyyy-MM", new Date());
  return format(lastDayOfMonth(date), "yyyy-MM-dd");
};

export const useTaxInvoicesQuery = ({
  filters,
  page,
  size,
}: {
  filters: {
    startDate?: string;
    endDate?: string;
    region?: string;
    storeName?: string;
    status?: string;
  };
  page: number;
  size: number;
}) => {
  return useQuery({
    queryKey: ["taxInvoices", filters, page, size],
    queryFn: () =>
      fetchTaxInvoices({
        startDate: getStartOfMonth(filters.startDate),
        endDate: getEndOfMonth(filters.endDate),

        region: regionMap[filters.region ?? "전체 선택"] || "ALL", // ✅ 한글 → 영문 변환 적용

        status: statusMap[filters.status ?? "처리 결과"] || "ALL",

        storeName: filters.storeName?.trim(),

        page,
        size,
      }),
    staleTime: 5000,
  });
};
