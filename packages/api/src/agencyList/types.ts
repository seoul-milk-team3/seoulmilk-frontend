export interface TaxInvoice {
  id: number;
  issueId: string;
  isNormal: "NORMAL" | "ABNORMAL" | "ALL";
  payStatus: "PAID_YET" | "PAID" | "ABNORMAL";
  createdDate: string;
}

export interface TaxInvoicesResponse {
  branchTaxFilterResponses: TaxInvoice[];
  totalPageSize: number;
}

export interface TaxInvoiceFilters {
  startDate?: string;
  endDate?: string;
  payStatus?: "" | "PAID_YET" | "PAID" | "ABNORMAL";
  page: number;
  size: number;
}
