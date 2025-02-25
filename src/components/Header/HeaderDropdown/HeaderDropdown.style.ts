import { css } from '@emotion/react';

export const dropdownMenuStyle = css({
  display: 'flex',
  flexDirection: 'column',
  visibility: 'visible',
  overflow: 'hidden',

  position: 'absolute',
  top: '50px',
  right: '0px',
  zIndex: 1000,

  width: '168px',
  height: '112px',
  paddingTop: '10px',
  borderRadius: '12px',

  backgroundColor: 'white',
  boxShadow: '4px 4px 8px 0px #9797972E',
});

export const dropdownItemStyle = css({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  width: '168px',
  height: '56px',
  padding: '12px 16px',

  color: '#404040',
  fontSize: '16px',
  textAlign: 'center',

  cursor: 'pointer',
  transition: 'background-color 0.2s ease-in-out',

  '&:hover': {
    backgroundColor: '#f0f0f0',
  },
});
