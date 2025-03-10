import { authData } from '@main/constants/authData';
import { theme } from '@seoulmilk/styles';
import { Flex, Text } from '@seoulmilk/ui';
import { useParams, useNavigate } from 'react-router-dom';
import { containerStyle, gridStyle } from './AuthSelectionPage.style';
import AuthSelectItem from './components/AuthSelectItem/AuthSelectItem';

const AuthSelectionpage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const handleAuthClick = () => {
    // API 연동하여 인증 요청 처리
    navigate(`/confirm-list/analysis`);
  };

  return (
    <Flex styles={{ direction: 'column', padding: '9.2rem 14.3rem' }}>
      <Text tag="xxl-title-bold">민간 인증서</Text>
      <Text tag="md1-text-medium" css={{ color: theme.colors.grayscale_50, marginTop: '1rem' }}>
        진위여부를 확인 하기 전 간편 인증을 해주세요
      </Text>
      <Flex css={containerStyle}>
        <div css={gridStyle}>
          {authData.map((provider) => (
            <AuthSelectItem
              key={provider.id}
              icon={provider.icon}
              name={provider.name}
              onClick={() => handleAuthClick()}
            />
          ))}
        </div>
      </Flex>
    </Flex>
  );
};

export default AuthSelectionpage;
