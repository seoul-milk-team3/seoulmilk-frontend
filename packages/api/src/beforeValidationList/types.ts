export interface TaxInvoiceBeforeValidation {
  id: number;
  createdDate: string; // 생성일
  transDate: string; // 거래 일자
  suName: string; // 공급자명
}

export interface TaxInvoicesBeforeValidationResponse {
  status: number;
  message: string;
  data: {
    beforeValidateTaxResponses: TaxInvoiceBeforeValidation[]; // ✅ 리스트 구조 변경
    totalPageSize: number; // ✅ 총 페이지 개수 추가
  };
}
