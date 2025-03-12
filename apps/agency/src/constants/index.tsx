export const mockList = Array.from({ length: 25 }, (_, i) => ({
  id: `M12983-w349-${1283 + i}`,
  date: '2024.12.25',
  status: ['PAID', 'PAID_YET', 'ABNORMAL'][i % 3] as 'PAID' | 'PAID_YET' | 'ABNORMAL',
  amount: `${(90 + i) * 1000}원`,
  paymentDate: i % 3 === 0 ? '2025.02.12' : '-',
  imageUrl: 'https://github.com/user-attachments/assets/418a1198-a68a-45cc-b30f-691d723315c5',
}));
