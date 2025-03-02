import { useState, useEffect } from 'react';

const sampleData = [
  { date: '2024.04.15', store: '서울지점', region: '서울특별시', status: '정상' },
  { date: '2024.05.10', store: '부산지점', region: '부산광역시', status: '정상' },
  { date: '2024.06.05', store: '대구지점', region: '대구광역시', status: '정상' },
  { date: '2024.07.25', store: '서울지점', region: '서울특별시', status: '정상' },
];

const CHOSUNG_LIST = [
  'ㄱ',
  'ㄲ',
  'ㄴ',
  'ㄷ',
  'ㄸ',
  'ㄹ',
  'ㅁ',
  'ㅂ',
  'ㅃ',
  'ㅅ',
  'ㅆ',
  'ㅇ',
  'ㅈ',
  'ㅉ',
  'ㅊ',
  'ㅋ',
  'ㅌ',
  'ㅍ',
  'ㅎ',
];

// 초성 변환 함수
const getChosung = (str: string) => {
  return str
    .split('')
    .map((char) => {
      const code = char.charCodeAt(0) - 44032;
      if (code >= 0 && code <= 11171) {
        return CHOSUNG_LIST[Math.floor(code / 588)]; // 초성 추출
      }
      return char; // 한글이 아니면 그대로 반환
    })
    .join('');
};

const DataTable = ({ filters }: { filters: any }) => {
  const [filteredData, setFilteredData] = useState(sampleData);

  useEffect(() => {
    const { startDate, endDate, region, storeName } = filters;

    const filtered = sampleData.filter((item) => {
      const dateMatch = startDate === '날짜' || endDate === '날짜' || (item.date >= startDate && item.date <= endDate);
      const regionMatch = region === '지역' || item.region === region;

      const storeNameChosung = getChosung(item.store); // 데이터의 초성 변환
      const searchChosung = getChosung(storeName.trim().toLowerCase()); // 검색어 초성 변환

      const storeMatch =
        storeName.trim() === '' ||
        item.store.toLowerCase().includes(storeName.trim().toLowerCase()) || // 기존 검색 (포함 여부)
        storeNameChosung.startsWith(searchChosung); // 초성 검색 (순서 보장)

      return dateMatch && regionMatch && storeMatch;
    });

    setFilteredData(filtered);
  }, [filters]); // filters 변경 시 즉시 반영

  return (
    <table>
      <thead>
        <tr>
          <th>일자</th>
          <th>공급자명</th>
          <th>처리결과</th>
        </tr>
      </thead>
      <tbody>
        {filteredData.length > 0 ? (
          filteredData.map((item, index) => (
            <tr key={index}>
              <td>{item.date}</td>
              <td>{item.store}</td>
              <td>{item.status}</td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan={3}>검색 결과가 없습니다.</td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default DataTable;
