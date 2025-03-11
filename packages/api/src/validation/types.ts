// 공통 API 응답 타입
export interface ApiResponse<T> {
  status: number;
  message: string;
  data: T;
}

// 간편 인증 전 세금계산서 검증 요청 타입
export interface PreVerificationRequest {
  loginTypeLevel: string;
  selectedIds: { id: number }[];
}

// 간편 인증 후 세금계산서 검증 응답 타입
export type InvoiceVerificationStatus = "NORMAL" | "ABNORMAL" | "ALL";

export interface InvoiceVerificationResponse {
  ntsTaxId: number;
  isNormal: InvoiceVerificationStatus;
}

// 간편 인증 후 세금계산서 검증 API 응답 타입
export interface PostVerificationResponse
  extends ApiResponse<InvoiceVerificationResponse[]> {}
