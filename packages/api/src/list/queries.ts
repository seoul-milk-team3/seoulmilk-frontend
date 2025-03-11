import { useQuery } from "@tanstack/react-query";
import { format, lastDayOfMonth, parse } from "date-fns";
import { fetchTaxInvoices } from ".";
import { regionMap, statusMap } from "./types";

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
  const normalizedRegion = filters.region?.trim().normalize("NFC");
  const normalizedStatus = filters.status?.trim().normalize("NFC");

  const finalStatus =
    normalizedStatus && normalizedStatus in statusMap
      ? statusMap[normalizedStatus]
      : "ALL";

  return useQuery({
    queryKey: ["taxInvoices", filters, page, size],
    queryFn: () =>
      fetchTaxInvoices({
        startDate: getStartOfMonth(filters.startDate),
        endDate: getEndOfMonth(filters.endDate),
        region: normalizedRegion
          ? (regionMap[normalizedRegion] ?? "ALL")
          : "ALL",
        status: finalStatus,
        storeName: filters.storeName?.trim(),
        page,
        size,
      }),
    staleTime: 5000,
  });
};
