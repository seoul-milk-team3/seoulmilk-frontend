export interface TaxInvoiceDetail {
  id: number;
  imageUrl: string;
  issueId: string;
  createdDate: string;
  grandTotal: number;
  payStatus: "PAID_YET" | "PAID" | "ABNORMAL";
  payDate: string;
}
