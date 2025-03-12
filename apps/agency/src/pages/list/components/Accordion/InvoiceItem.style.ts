import { css } from '@emotion/react';
import { theme } from '@seoulmilk/styles';

export const invoiceItemWrapper = css({
  padding: '1rem 2.6rem',
  cursor: 'pointer',
  width: '100%',
  backgroundColor: theme.colors.grayscale_0,
  borderRadius: '12px',
});

export const invoiceItemHeader = css({
  justifyContent: 'space-between',
  alignItems: 'center',
});

export const invoiceIdText = css({
  width: '26.5rem',
});

export const invoiceDateText = css({});

/* 펼쳐졌을 때만 보이는 구분선 */
export const divider = css({
  height: '1px',
  backgroundColor: '#E0E0E0',
  marginTop: '12px',
});

/* 상세 정보 컨테이너 */
export const invoiceDetailsContainer = css({
  maxHeight: '0',
  overflow: 'hidden',
  transition: 'max-height 0.2s ease-in-out',
});

/* 상세 정보가 펼쳐졌을 때 */
export const invoiceDetailsWrapper = css({
  maxHeight: '500px',
  paddingTop: '12px',
});

/* 화살표 아이콘 기본 스타일 */
export const arrowIcon = css({
  transition: 'transform 0.3s ease',
});

/* 클릭 시 180도 회전 */
export const arrowIconRotated = css({
  transform: 'rotate(180deg)',
  transition: 'transform 0.3s ease',
});
