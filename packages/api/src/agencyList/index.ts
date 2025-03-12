import { get } from "../instance";
import { TaxInvoicesResponse, TaxInvoiceFilters } from "./types";
import { format, lastDayOfMonth, parse } from "date-fns";

// YYYY-MM-01 형식으로 변환 (해당 월의 첫날)
export const getStartOfMonth = (dateStr?: string) => {
  if (!dateStr || dateStr === "날짜") return undefined;
  return `${dateStr}-01`;
};

// YYYY-MM-최대일 형식으로 변환 (해당 월의 마지막 날)
export const getEndOfMonth = (dateStr?: string) => {
  if (!dateStr || dateStr === "날짜") return undefined;
  const date = parse(dateStr, "yyyy-MM", new Date());
  return format(lastDayOfMonth(date), "yyyy-MM-dd");
};
export const fetchTaxInvoices = async (filters: TaxInvoiceFilters) => {
  const params = new URLSearchParams();

  // startDate와 endDate가 모두 선택되었을 때만 날짜 필터 적용
  if (filters.startDate && filters.endDate) {
    params.append("startDate", getStartOfMonth(filters.startDate)!);
    params.append("endDate", getEndOfMonth(filters.endDate)!);
  }

  params.append("payStatus", filters.payStatus ?? "");
  params.append("page", String(filters.page || 1));
  params.append("size", String(filters.size || 8));

  const response = await get<{ data: TaxInvoicesResponse }>(
    `/tax-invoices/branch/filter?${params.toString()}`
  );

  console.log("📤 리스트 API 응답:", response.data);
  return response.data;
};
