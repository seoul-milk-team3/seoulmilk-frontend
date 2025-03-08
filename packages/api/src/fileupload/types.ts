
export interface PostTaxInvoiceOCRResponse {
  data: {
    ocrResults: any[]; // OCR 결과 타입은 백엔드 응답에 따라 변경 가능
  };
}
