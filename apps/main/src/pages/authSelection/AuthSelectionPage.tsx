import { authData } from '@main/constants/authData';
import { usePreVerification } from '@seoulmilk/api';
import { theme } from '@seoulmilk/styles';
import { Flex, Text, Button } from '@seoulmilk/ui';
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { containerStyle, gridStyle } from './AuthSelectionPage.style';
import AuthSelectItem from './components/AuthSelectItem/AuthSelectItem';

const AuthSelectionPage = () => {
  const { state } = useLocation();
  console.log('select', state);
  const navigate = useNavigate();
  const [selectedAuth, setSelectedAuth] = useState<string | null>(null);
  const [verificationSuccess, setVerificationSuccess] = useState(false);

  const { mutate: preVerify } = usePreVerification();

  const handleAuthClick = (authId: string) => {
    setSelectedAuth(authId);
    preVerify(
      { loginTypeLevel: authId, selectedIds: state.selectedIds.map((id: number) => ({ id })) },
      {
        onSuccess: () => setVerificationSuccess(true),
      }
    );
  };

  const handleCompleteAuth = () => {
    navigate('/confirm-list/analysis', { state: { selectedIds: state.selectedIds } });
  };

  return (
    <Flex styles={{ direction: 'column', padding: '9.2rem 14.3rem' }}>
      <Text tag="xxl-title-bold">민간 인증서</Text>
      <Text tag="md1-text-medium" css={{ color: theme.colors.grayscale_50, marginTop: '1rem' }}>
        진위여부 확인을 위해 간편 인증을 진행해주세요
      </Text>
      <Flex css={containerStyle}>
        <div css={gridStyle}>
          {authData.map(({ id, name, icon }) => (
            <AuthSelectItem key={id} icon={icon} name={name} onClick={() => handleAuthClick(id)} />
          ))}
        </div>
      </Flex>

      <Flex styles={{ align: 'center', justify: 'center', width: '100%', marginTop: '2rem' }}>
        {verificationSuccess && (
          <Button variant="secondary" onClick={handleCompleteAuth}>
            간편 인증 완료
          </Button>
        )}
      </Flex>
    </Flex>
  );
};

export default AuthSelectionPage;
