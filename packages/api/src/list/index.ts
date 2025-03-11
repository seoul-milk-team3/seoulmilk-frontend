import { axiosInstance } from "../instance";
import { TaxInvoicesResponse, regionMap, statusMap } from "./types";

const reverseStatusMap = Object.fromEntries(
  Object.entries(statusMap).map(([key, value]) => [value, key])
);

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

  const regionValue =
    region && Object.values(regionMap).includes(region)
      ? region
      : (regionMap[region ?? "전체 선택"] ?? "ALL");

  params.append("region", regionValue);

  if (storeName) {
    params.append("searchSupplierName", storeName.trim());
  }

  let mappedStatus = "ALL"; // 기본값

  if (status) {
    if (statusMap[status]) {
      mappedStatus = statusMap[status]; // 한글 상태값 변환
    } else if (reverseStatusMap[status]) {
      mappedStatus = status; // 이미 변환된 값이면 그대로 사용
    } else {
      console.error(
        "[fetchTaxInvoices] statusMap에서 찾을 수 없는 값:",
        status
      );
    }
  } else {
    console.warn("fetchTaxInvoices] status 값이 undefined입니다.");
  }

  params.append("resultType", mappedStatus);

  const response = await axiosInstance.get<{ data: TaxInvoicesResponse }>(
    `/tax-invoices/office/filter?${params.toString()}`
  );

  console.log("📤 리스트 API 응답:", response.data);

  return response.data.data;
};
