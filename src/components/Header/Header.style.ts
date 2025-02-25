import { css } from '@emotion/react';

// 폰트 페이스 선언 (커스텀 폰트 사용 시)
export const fontFace = css`
  @font-face {
    font-family: 'Seoulmilk_font';
    src: url('/font/Seoulmilk_font.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
  }
`;

export const headerBaseStyle = css({
  width: '100%',
  maxWidth: '1440px',
  height: '70px',
  display: 'flex',
  justifyContent: 'space-between', // 양쪽 정렬
  alignItems: 'center',
  padding: '16px 48px',
  boxSizing: 'border-box',
});

export const rightSectionStyle = (variant: 'default' | 'alternate') => css({
  display: 'flex',
  alignItems: 'center',
  gap: '16px', 
  fontSize: '14px',
  color: variant === 'default' ? '#333' : 'white',
  marginLeft: 'auto', // 오른쪽 정렬 유지
});


// variant별 스타일 (배경색, 테두리 조정)
export const headerVariantStyle = {
  default: css({
    backgroundColor: 'white',
    borderBottom: '2px solid #ddd',
  }),
  alternate: css({
    backgroundColor: '#009857', // 초록색 배경
    borderBottom: 'none',
  }),
};

export const logoTextStyle = (variant: 'default' | 'alternate') => css`
  ${fontFace}
  font-family: 'Seoulmilk_font', sans-serif;
  font-size: 18px;
  font-weight: bold;
  color: ${variant === 'default' ? '#333' : 'white'};
  display: inline-flex; /* ✅ 텍스트를 로고 옆에 배치 */
  align-items: center;
  white-space: nowrap;
  flex-shrink: 0; /* ✅ 사라지지 않도록 보장 */
  margin-top:9px;
`;

export const profileImageStyle = css({
  width: '32px',
  height: '32px',
  borderRadius: '50%',
  border : '1px',
});


export const notificationIconStyle = (variant: 'default' | 'alternate') => css({
  width: '20px',
  height: '20px',
  filter: variant === 'default' ? 'none' : 'invert(1)',
});
