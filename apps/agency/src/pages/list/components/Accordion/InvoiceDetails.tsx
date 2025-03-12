import { Flex, ImagePreview, Text } from '@seoulmilk/ui';
import { invoiceDetailsWrapper, invoiceDetailsInfo, textStyle, text1Style } from './InvoiceDetails.style';

interface InvoiceDetailsProps {
  amount: string;
  paymentDate: string;
  status: 'PAID_YET' | 'PAID' | 'ABNORMAL';
  imageUrl: string;
}

/* 지급 상태 한글 변환 */
const statusMap: Record<'PAID_YET' | 'PAID' | 'ABNORMAL', string> = {
  PAID_YET: '입금전',
  PAID: '입금완료',
  ABNORMAL: '비정상',
};

const InvoiceDetails = ({ amount, paymentDate, status, imageUrl }: InvoiceDetailsProps) => {
  return (
    <div css={invoiceDetailsWrapper}>
      {/* 세금 계산서 이미지 */}
      <ImagePreview imageUrl={imageUrl} width="41.4rem" height="27.2rem" />

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
            {statusMap[status]}
          </Text>
          <Text tag="md2-text-medium">{amount}원</Text>
          <Text tag="md2-text-medium">{paymentDate}</Text>
        </Flex>
      </div>
    </div>
  );
};

export default InvoiceDetails;
