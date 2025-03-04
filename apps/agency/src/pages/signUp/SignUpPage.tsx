import { Flex, Text } from '@seoulmilk/ui';
import { Link } from 'react-router-dom';
import { detailStyle, detailLoginStyle } from './SignUpPage.style';
import SignupForm from './components/SignupForm/SignupForm';

const SignUp = () => {
  return (
    <Flex
      styles={{ direction: 'column', align: 'center', gap: '2rem', paddingTop: '7.75rem', paddingBottom: '13.6rem' }}>
      <Text tag="xl-title-bold" css={{ textAlign: 'left', width: '100%', paddingBottom: '0.4rem' }}>
        회원가입
      </Text>

      {/* 회원가입 폼 */}
      <SignupForm />

      <Flex styles={{ align: 'center', gap: '0.7rem' }}>
        <Text tag="md2-text-medium" css={detailStyle}>
          이미 아이디가 있으신가요?
        </Text>
        <Link to="/login">
          <Text tag="md2-text-bold" css={detailLoginStyle}>
            로그인
          </Text>
        </Link>
      </Flex>
    </Flex>
  );
};

export default SignUp;
