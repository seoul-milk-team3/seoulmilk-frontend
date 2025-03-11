import { axiosInstance } from "../instance";
import { ErrorListResponse } from "./types";

type StatusType =
  | "NORMAL"
  | "ABNORMAL"
  | "ALL"
  | "처리 결과"
  | "전체"
  | "정상"
  | "비정상";

export const fetchErrorList= async ({
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
  status?: StatusType;
  page: number;
  size: number;
}) => {
  const params = new URLSearchParams();

  if (startDate) params.append("startYearAndMonth", startDate);
  if (endDate) params.append("endYearAndMonth", endDate);

  if (region && region !== "지역" && region !== "전체 선택") {
    params.append("region", region.trim());
  }

  params.append("page", page.toString());
  params.append("size", size.toString());

  console.log("리스트 API 요청:", params.toString());

  const response = await axiosInstance.get<{ data: ErrorListResponse }>(
    `/tax-invoices/office/abnormal-list?${params.toString()}`
  );

  console.log(" 리스트 API 응답:", response.data);

  return response.data.data;
};
