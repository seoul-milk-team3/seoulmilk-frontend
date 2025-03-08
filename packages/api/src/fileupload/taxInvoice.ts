import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { REFRESH_TOKEN_KEY, USER_ID_KEY } from "@seoulmilk/utils";

const API_BASE_URL = 'https://seoul-milk.site/api/tax-invoices';

interface OCRField {
  name: string;
  
  inferText: string;
}

interface OCRRequest {
  requestId: string;
  fields: OCRField[];
}

interface SaveTaxInvoicesPayload {
  requestList: OCRRequest[];
  files: File[];
}

// OCR 세금 계산서 API
export const useOcrTaxInvoices = () => {
  return useMutation<{ requests: OCRRequest[] }, Error, File[]>({
    mutationFn: async (files) => {
      const formData = new FormData();
      files.forEach((file) => formData.append("files", file));

      const token = localStorage.getItem(USER_ID_KEY);
      if (!token) {
        console.error("❌ 인증 토큰이 없습니다.");
        throw new Error("인증 토큰이 없습니다. 로그인 후 다시 시도해주세요.");
      }
      
      const response = await axios.post(`${API_BASE_URL}/ocr`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          "Authorization": `Bearer ${token}`,
        },
      });

      return response.data;
    },
  });
};

// 세금 계산서 저장 API
export const useSaveTaxInvoices = () => {
  return useMutation<{ success: boolean }, Error, SaveTaxInvoicesPayload>({
    mutationFn: async ({ requestList, files }) => {
      const formData = new FormData();
      formData.append('requestList', JSON.stringify(requestList));
      files.forEach((file) => formData.append('files', file));
      
      const token = localStorage.getItem(USER_ID_KEY);
      if (!token) {
        console.error("❌ 인증 토큰이 없습니다.");
        throw new Error("인증 토큰이 없습니다. 로그인 후 다시 시도해주세요.");
      }
      
      const response = await axios.post(API_BASE_URL, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Authorization': `Bearer ${token}`,
        },
      });
      return response.data;
    },
  });
};