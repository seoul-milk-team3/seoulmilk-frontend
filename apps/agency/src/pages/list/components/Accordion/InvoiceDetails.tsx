import { TaxInvoiceDetail } from '@seoulmilk/api/src/agencyDetail/types';
import { Flex, Text, ImagePreview } from '@seoulmilk/ui';
import { format, parseISO, isValid } from 'date-fns';
import { invoiceDetailsWrapper, invoiceDetailsInfo, textStyle, text1Style } from './InvoiceDetails.style';

interface InvoiceDetailsProps {
  invoiceDetail: TaxInvoiceDetail;
}

const formatDate = (date?: string) => {
  if (!date) return '미지급'; // ✅ 날짜가 없으면 "미지급" 반환

  const parsedDate = parseISO(date); // ✅ 문자열을 날짜 형식으로 변환
  if (!isValid(parsedDate)) return '미지급'; // ✅ 유효하지 않은 날짜일 경우 "미지급" 반환

  return format(parsedDate, 'yyyy.MM.dd'); // ✅ 정상적인 날짜일 경우 변환
};

/* 지급 상태 한글 변환 */
const statusMap: Record<'PAID_YET' | 'PAID' | 'ABNORMAL', string> = {
  PAID_YET: '입금전',
  PAID: '입금완료',
  ABNORMAL: '비정상',
};

const InvoiceDetails = ({ invoiceDetail }: InvoiceDetailsProps) => {
  return (
    <div css={invoiceDetailsWrapper}>
      {/* 세금 계산서 이미지 */}
      <ImagePreview imageUrl={invoiceDetail.imageUrl} width="41.4rem" height="27.2rem" />

      {/* 지급 정보 */}
      <div css={invoiceDetailsInfo}>
        <Flex styles={{ direction: 'column', gap: '1.6rem' }}>
          <Text tag="md1-text-semibold" css={textStyle}>
            지급 상태
          </Text>
          <Text tag="md1-text-semibold" css={textStyle}>
            금액
          </Text>
          <Text tag="md1-text-semibold" css={textStyle}>
            지급 날짜
          </Text>
        </Flex>
        <Flex styles={{ direction: 'column', gap: '1.7rem' }}>
          <Text tag="md2-text-medium" css={text1Style}>
            {statusMap[invoiceDetail.payStatus]}
          </Text>
          <Text tag="md2-text-medium">{invoiceDetail.grandTotal.toLocaleString()} 원</Text>
          <Text tag="md2-text-medium">{formatDate(invoiceDetail.payDate)}</Text>
        </Flex>
      </div>
    </div>
  );
};

export default InvoiceDetails;
