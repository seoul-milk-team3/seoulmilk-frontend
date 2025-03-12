import { useAgencyTaxInvoiceDetailQuery } from '@seoulmilk/api';
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
  id: number;
  issueId: string;
  payStatus: 'PAID_YET' | 'PAID' | 'ABNORMAL';
  createdDate: string;
}

const InvoiceItem = ({ id, issueId, payStatus, createdDate }: InvoiceItemProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const { data } = useAgencyTaxInvoiceDetailQuery(id, isOpen); // ✅ 로딩 상태 사용 안함

  return (
    <div css={invoiceItemWrapper}>
      {/* 클릭 시 상세 정보 로드 */}
      <Flex onClick={() => setIsOpen(!isOpen)} css={invoiceItemHeader}>
        <Flex styles={{ align: 'center' }}>
          <Text tag="md2-text-medium" css={invoiceIdText}>
            {issueId}
          </Text>
          <Text tag="md2-text-medium" css={invoiceDateText}>
            {createdDate}
          </Text>
        </Flex>
        <Flex styles={{ align: 'center', gap: '4.1rem' }}>
          <StatusChip status={payStatus} />
          <IcAgencyArrow width={24} height={24} css={isOpen ? arrowIconRotated : arrowIcon} />
        </Flex>
      </Flex>

      {/* 아코디언이 열렸을 때만 구분선 표시 */}
      {isOpen && <div css={divider} />}

      {/* 상세 정보 표시 (로딩 중 UI 제거) */}
      {isOpen && data && (
        <Flex css={[invoiceDetailsContainer, invoiceDetailsWrapper]}>
          <InvoiceDetails invoiceDetail={data} />
        </Flex>
      )}
    </div>
  );
};

export default InvoiceItem;
