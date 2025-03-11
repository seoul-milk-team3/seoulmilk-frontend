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
}
