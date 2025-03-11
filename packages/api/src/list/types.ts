export interface TaxInvoice {
  id: number;
  suId: string;
  ipId: string;
  transDate: string;
  suName: string;
  suAddr: string;
  isNormal: "NORMAL" | "ABNORMAL" | "ALL";
  isValidated: string;
  createdDate: string;
}

export interface TaxInvoicesResponse {
  officeTaxFilterResponseList: TaxInvoice[];
  totalPageSize: number;
}

export const regionMap: Record<string, string> = {
  "전체 선택": "ALL",
  서울특별시: "SEOUL",
  부산광역시: "BUSAN",
  대구광역시: "DAEGU",
  인천광역시: "INCHEON",
  광주광역시: "GWANGJU",
  대전광역시: "DAEJEON",
  울산광역시: "ULSAN",
  세종특별자치시: "SEJONG",
  경기도: "GYEONGGI",
  강원특별자치도: "GANGWON",
  충청북도: "CHUNGBUK",
  충청남도: "CHUNGNAM",
  전북특별자치도: "JEONBUK",
  전라남도: "JEONNAM",
  경상북도: "GYEONGBUK",
  경상남도: "GYEONGNAM",
  제주특별자치도: "JEJU",
};

export const statusMap: Record<string, string> = {
  "처리 결과": "ALL", // 기본값
  전체: "ALL",
  정상: "NORMAL",
  비정상: "ABNORMAL",
};
