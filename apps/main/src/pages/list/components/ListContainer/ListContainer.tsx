import { getChosung } from '@main/utils';
import { useTaxInvoicesQuery } from '@seoulmilk/api/src/list/queries';
import { TaxInvoice } from '@seoulmilk/api/src/list/types';
import { IcDownload } from '@seoulmilk/icon';
import { CheckBox, Flex, Text, Pagination } from '@seoulmilk/ui';
import * as XLSX from 'xlsx';
import { useState, useEffect } from 'react';
import ListItem from '../ListItem/ListItem';
import { textStyle, text1Style, text2Style, btnTextStyle, btnStyle } from './ListContainer.style';

// ✅ 엑셀 변환 라이브러리 추가

interface ListContainerProps {
  filters: {
    startDate: string;
    endDate: string;
    region: string;
    storeName: string;
    status: string;
  };
  currentPage: number;
  setCurrentPage: (page: number) => void;
  resetCheckBoxesTrigger: boolean; // ✅ 필터 초기화 시 체크박스도 초기화하기 위한 콜백 함수
}

const ITEMS_PER_PAGE = 8;

const ListContainer = ({ filters, currentPage, setCurrentPage, resetCheckBoxesTrigger }: ListContainerProps) => {
  const [selectedItems, setSelectedItems] = useState<number[]>([]);
  const [isAllChecked, setIsAllChecked] = useState(false);

  // 서버에서 필터링된 데이터 가져오기
  const { data } = useTaxInvoicesQuery({
    filters: {
      startDate: filters.startDate !== '날짜' ? filters.startDate : undefined,
      endDate: filters.endDate !== '날짜' ? filters.endDate : undefined,
      region: filters.region !== '지역' ? filters.region : undefined,
      status: filters.status !== '전체' ? (filters.status as 'NORMAL' | 'ABNORMAL' | 'ALL' | undefined) : 'ALL',
    },
    page: currentPage,
    size: ITEMS_PER_PAGE,
  });

  const filteredData = (data?.officeTaxFilterResponseList || []).filter((item) => {
    const storeNameChosung = getChosung(item.suName);
    const searchChosung = getChosung(filters.storeName.trim().toLowerCase());

    return (
      filters.storeName.trim() === '' ||
      item.suName.toLowerCase().includes(filters.storeName.trim().toLowerCase()) ||
      storeNameChosung.startsWith(searchChosung)
    );
  });

  // 초기화 버튼 클릭 시 모든 체크박스 해제
  useEffect(() => {
    setSelectedItems([]);
    setIsAllChecked(false);
  }, [resetCheckBoxesTrigger]);

  // 전체 체크박스 클릭
  const handleSelectAll = () => {
    if (isAllChecked) {
      setSelectedItems([]);
    } else {
      setSelectedItems(filteredData.map((item) => item.id));
    }
    setIsAllChecked(!isAllChecked);
  };

  // 개별 체크박스 클릭
  const handleItemCheck = (id: number) => {
    setSelectedItems((prev) => (prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]));
  };

  useEffect(() => {
    setIsAllChecked(selectedItems.length === filteredData.length);
  }, [selectedItems, filteredData.length]);

  // 선택된 항목들을 엑셀 파일로 다운로드하는 함수
  const handleDownloadExcel = () => {
    if (selectedItems.length === 0) {
      alert('다운로드할 항목을 선택해주세요.');
      return;
    }

    const selectedData = filteredData
      .filter((item) => selectedItems.includes(item.id))
      .map((item) => ({
        승인번호: item.issueId,
        공급자사업자등록번호: item.suId,
        공급받는자사업자등록번호: item.ipId,
        거래일자: item.transDate,
        공급자명: item.suName,
        공급자주소: item.suAddr,
        처리결과: item.isNormal === 'NORMAL' ? '정상' : '비정상',
        생성일자: item.createdDate,
      }));

    const worksheet = XLSX.utils.json_to_sheet(selectedData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, '세금계산서 목록');

    XLSX.writeFile(workbook, '세금계산서_목록.xlsx');
  };

  return (
    <Flex styles={{ direction: 'column', width: '100%', gap: '1.2rem' }}>
      <Flex styles={{ justify: 'space-between', width: '100%', align: 'center' }}>
        <Flex styles={{ align: 'center', height: '5.2rem', padding: '1.4rem 2.6rem' }}>
          <CheckBox isChecked={isAllChecked} onChange={handleSelectAll} css={{ marginRight: '13rem' }} />
          <Text tag="md2-text-medium" css={text1Style}>
            일자
          </Text>
          <Text tag="md2-text-medium" css={text2Style}>
            공급자명
          </Text>
          <Text tag="md2-text-medium" css={textStyle}>
            처리결과
          </Text>
        </Flex>

        {/* 엑셀 다운로드 버튼 */}
        <Flex
          tag="button"
          styles={{ align: 'center', gap: '1rem', padding: '1.2rem 2.4rem' }}
          css={btnStyle}
          onClick={handleDownloadExcel}>
          <IcDownload width={24} height={24} />
          <Text tag="md2-text-medium" css={btnTextStyle}>
            엑셀 다운로드
          </Text>
        </Flex>
      </Flex>

      {/* 리스트 아이템 */}
      <Flex styles={{ direction: 'column', width: '100%', gap: '1.2rem' }} css={{ minHeight: '59.6rem', flex: 1 }}>
        {filteredData.map((item) => (
          <ListItem key={item.id} item={item} isChecked={selectedItems.includes(item.id)} onCheck={handleItemCheck} />
        ))}
      </Flex>

      {/* 페이지네이션 */}
      <Pagination
        totalItems={data?.totalPageSize || 0}
        itemsPerPage={ITEMS_PER_PAGE}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
      />
    </Flex>
  );
};

export default ListContainer;
