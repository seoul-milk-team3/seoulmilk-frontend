import { IcAgencyArrow } from '@seoulmilk/icon';
import { Flex, Text } from '@seoulmilk/ui';
import React, { useState } from 'react';
import StatusChip from '../StatusChip/StatusChip';
import InvoiceDetails from './InvoiceDetails';
import {
  invoiceItemWrapper,
  invoiceItemHeader,
  invoiceIdText,
  invoiceDateText,
  invoiceDetailsContainer,
  invoiceDetailsWrapper,
  divider,
  arrowIcon,
  arrowIconRotated,
} from './InvoiceItem.style';

interface InvoiceItemProps {
  id: string;
  date: string;
  status: 'PAID_YET' | 'PAID' | 'ABNORMAL';
  amount: string;
  paymentDate: string;
  imageUrl: string;
}

const InvoiceItem = ({ id, date, status, amount, paymentDate, imageUrl }: InvoiceItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div css={invoiceItemWrapper}>
      {/* 클릭 시 아코디언 열림/닫힘 */}
      <Flex onClick={() => setIsOpen(!isOpen)} css={invoiceItemHeader}>
        <Flex styles={{ align: 'center' }}>
          <Text tag="md2-text-medium" css={invoiceIdText}>
            {id}
          </Text>
          <Text tag="md2-text-medium" css={invoiceDateText}>
            {date}
          </Text>
        </Flex>
        <Flex styles={{ align: 'center', gap: '4.1rem' }}>
          <StatusChip status={status} />
          <IcAgencyArrow width={24} height={24} css={isOpen ? arrowIconRotated : arrowIcon} />
        </Flex>
      </Flex>

      {/* 아코디언이 열렸을 때만 구분선 표시 */}
      {isOpen && <div css={divider} />}

      {/* 상세 내용 */}
      <Flex css={[invoiceDetailsContainer, isOpen && invoiceDetailsWrapper]}>
        {isOpen && <InvoiceDetails amount={amount} paymentDate={paymentDate} status={status} imageUrl={imageUrl} />}
      </Flex>
    </div>
  );
};

export default InvoiceItem;
