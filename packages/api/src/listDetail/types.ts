export interface TaxInvoiceDetailResponse {
  id: number; // 승인 번호
  arap: string; // 매출/매입 구분
  issueDate: string; // 작성일자
  suId: string; // 공급자 사업자등록번호
  ipId: string; // 공급받는자 사업자등록번호
  chargeTotal: number; // 총 공급가액 합계
  grandTotal: number; // 총액 (공급가액 + 세액)
  taxTotal: number; // 총 세액 합계
  createdDate: string; // 생성일
  createdTime: string; // 생성시간
  imageUrl: string; // 전자세금계산서 이미지 URL
}
