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
