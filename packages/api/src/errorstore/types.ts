export interface TaxInvoiceField {
  name: string;
  inferText: string;
}

export interface TaxInvoiceRequestItem {
  fields: TaxInvoiceField[];
}

export interface TaxInvoiceRequest {
  requests: TaxInvoiceRequestItem[];
}

export interface TaxInvoiceResponse {
  message: string;
  data?: object | null; // `data` 필드 추가 (빈 객체 또는 null 가능)
}
