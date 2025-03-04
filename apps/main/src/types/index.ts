export interface StoreItem {
  id: string;
  date: string;
  store: string;
  region: string;
  status: '정상' | '비정상' | '미입금';
}
