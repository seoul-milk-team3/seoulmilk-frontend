import TabSwitch from '@main/components/TabSwitch/TabSwitch';
import { Flex, Text } from '@seoulmilk/ui';
import { useState } from 'react';
import SignupForm from './components/SignupForm/SignupForm';

const SignUp = () => {
  const [activeTab, setActiveTab] = useState<'admin' | 'user'>('admin');

  return (
    <Flex styles={{ direction: 'column', align: 'center', gap: '2rem' }}>
      <Text tag="lg-subtitle-bold">회원가입</Text>

      {/* 관리자/사용자 선택 */}
      <TabSwitch activeTab={activeTab} onChange={setActiveTab} />

      {/* 회원가입 폼 */}
      <SignupForm type={activeTab} />

      <Text tag="md2-text-regular" css={{ marginTop: '1rem' }}>
        이미 아이디가 있으신가요? <a href="/login">로그인</a>
      </Text>
    </Flex>
  );
};

export default SignUp;
