import { IcLoginLogo } from '@seoulmilk/icon';
import { Input, Button, Flex, Text } from '@seoulmilk/ui';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { dividerStyle, textColor } from './LoginPage.style';

const mockUser = {
  id: 'qwer-1122-29393',
  password: 'kkkk20238934',
};

interface LoginForm {
  id: string;
  password: string;
}

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    clearErrors,
    setValue,
    watch,
  } = useForm<LoginForm>({
    mode: 'onChange',
  });

  const [serverError, setServerError] = useState('');

  const onSubmit = (data: LoginForm) => {
    setServerError('');

    if (data.id !== mockUser.id || data.password !== mockUser.password) {
      setError('id', { message: '입력하신 사번번호를 찾을 수 없어요. 다시 한 번 확인해주세요!' });
      setError('password', { message: '비밀번호가 올바르지 않아요. 다시 확인해주세요.' });
      setServerError('아이디 또는 비밀번호가 올바르지 않습니다.');
      return;
    }
  };

  //입력값이 하나라도 없으면 버튼 비활성화
  const isDisabled = !watch('id') || !watch('password');

  return (
    <Flex styles={{ direction: 'column', align: 'center' }}>
      <IcLoginLogo width={180} height={64} />

      <form onSubmit={handleSubmit(onSubmit)} css={{ width: '42rem', marginTop: '3.6rem' }}>
        <Flex styles={{ direction: 'column', gap: '1.2rem' }}>
          <Input
            placeholder="사번"
            value={watch('id') || ''}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setValue('id', e.target.value);
              clearErrors('id'); // 입력값 변경 시 에러 제거
            }}
            errorMessage={errors.id?.message}
            width="42rem"
          />
          <Input
            type="password"
            placeholder="비밀번호"
            value={watch('password') || ''}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setValue('password', e.target.value);
              clearErrors('password'); // 입력값 변경 시 에러 제거
            }}
            errorMessage={errors.password?.message}
            width="42rem"
          />

          <Button
            type="submit"
            variant="secondary"
            padding="1.7rem 16.65rem"
            disabled={isDisabled}
            css={{ marginTop: '0.8rem' }}>
            로그인하기
          </Button>
        </Flex>
      </form>

      <Flex styles={{ gap: '1.6rem', marginTop: '2rem' }}>
        <Text tag="md2-text-regular" css={textColor}>
          회원가입
        </Text>
        <span css={dividerStyle} />
        <Text tag="md2-text-regular" css={textColor}>
          비밀번호 찾기
        </Text>
      </Flex>
    </Flex>
  );
};

export default Login;
