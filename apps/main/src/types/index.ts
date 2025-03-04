export interface StoreItem {
  id: string;
  date: string;
  store: string;
  region: string;
  status: '정상' | '비정상' | '미입금';
  details?: {
    approvalNumber: string; // 승인 번호
    transactionType: string; // 매출/매입 구분
    createdAt: string; // 작성일자
    supplierBusinessNumber: string; // 공급자 사업자 등록번호
    receiverBusinessNumber: string; // 공급받는자 사업자 등록번호
    totalAmount: number; // 총 공급가액 합계
    totalTaxAmount: number; // 총 세액 합계
    totalPrice: number; // 총액 (공급가액 + 세액)
    createdDate: string; // 생성일
    createdTime: string; // 생성시간
    imageUrl: string; // 전자세금계산서 이미지 URL
  };
}
