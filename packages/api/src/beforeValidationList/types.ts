export interface TaxInvoiceBeforeValidation {
  id: number;
  createdDate: string; // 생성일
  transDate: string; // 거래 일자
  suName: string; // 공급자명
}

export interface TaxInvoicesBeforeValidationResponse {
  status: number;
  message: string;
  data: TaxInvoiceBeforeValidation[];
}
