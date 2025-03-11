export interface ErrorList {
  id: number;
  suId: string;
  ipId: string;
  transDate: string;
  suName: string;
  suAddr: string;
  isValidated: string;
  createdDate: string;
}

export interface ErrorListResponse {
  officeAbnormalTaxValidationResponses: ErrorList[];
  totalPageSize: number;
}
