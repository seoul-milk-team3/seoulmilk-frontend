import { axiosInstance } from "../instance";
import { TaxInvoicesResponse, regionMap, statusMap } from "./types";

type StatusType =
  | "NORMAL"
  | "ABNORMAL"
  | "ALL"
  | "처리 결과"
  | "전체"
  | "정상"
  | "비정상";

export const fetchTaxInvoices = async ({
  startDate,
  endDate,
  region,
  storeName,
  status,
  page,
  size,
}: {
  startDate?: string;
  endDate?: string;
  region?: string;
  storeName?: string;
  status?: string;
  page: number;
  size: number;
}) => {
  const params = new URLSearchParams();

  if (startDate) params.append("startYearAndMonth", startDate);
  if (endDate) params.append("endYearAndMonth", endDate);

  const regionValue = regionMap[region ?? "전체 선택"] || "ALL";
  params.append("region", regionValue);

  if (storeName) {
    params.append("searchSupplierName", storeName.trim());
  }

  const resultType = statusMap[status ?? "처리 결과"] || "ALL";
  params.append("resultType", resultType);

  params.append("page", page.toString());
  params.append("size", size.toString());

  console.log("리스트 API 요청:", params.toString());

  const response = await axiosInstance.get<{ data: TaxInvoicesResponse }>(
    `/tax-invoices/office/filter?${params.toString()}`
  );

  console.log(" 리스트 API 응답:", response.data);

  return response.data.data;
};
