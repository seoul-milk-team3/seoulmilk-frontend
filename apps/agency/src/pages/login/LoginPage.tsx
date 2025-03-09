import { useBranchLoginMutation } from '@seoulmilk/api/src/login/queries';
import { PostBranchLoginRequestBody } from '@seoulmilk/api/src/login/types';
import { IcLoginLogo } from '@seoulmilk/icon';
import { Input, Button, Flex, Text } from '@seoulmilk/ui';
import useMediaQuery from '@seoulmilk/utils/src/hooks/useMediaQuery';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { dividerStyle, textColor } from './LoginPage.style';

const Login = () => {
  const isMobile = useMediaQuery('(max-width: 768px)');
  const formWidth = isMobile ? '36.1rem' : '42rem';

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    clearErrors,
    setValue,
    watch,
  } = useForm<PostBranchLoginRequestBody>({
    mode: 'onChange',
  });

  const { mutate } = useBranchLoginMutation(setError);

  const onSubmit = (data: PostBranchLoginRequestBody) => {
    mutate(data);
  };

  //입력값이 하나라도 없으면 버튼 비활성화
  const isDisabled = !watch('businessId') || !watch('password');

  return (
    <Flex styles={{ direction: 'column', align: 'center', paddingTop: '9.6rem', height: '100vh' }}>
      <IcLoginLogo width={180} height={64} />

      <form onSubmit={handleSubmit(onSubmit)} css={{ width: formWidth, marginTop: '3.6rem' }}>
        <Flex styles={{ direction: 'column', gap: '1.2rem' }}>
          <Input
            placeholder="사업자 등록번호"
            value={watch('businessId') || ''}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setValue('businessId', e.target.value);
              clearErrors('businessId'); // 입력값 변경 시 에러 제거
            }}
            errorMessage={errors.businessId?.message}
            width={formWidth}
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
            width={formWidth}
          />

          <Button
            type="submit"
            variant="secondary"
            padding={isMobile ? '1.35rem 0rem' : '1.7rem 16.65rem'}
            disabled={isDisabled}
            css={{ marginTop: '0.8rem', width: '100%' }}>
            로그인하기
          </Button>
        </Flex>
      </form>

      <Flex styles={{ gap: '1.6rem', marginTop: '2rem' }}>
        <Link to="/signup">
          <Text tag="md2-text-regular" css={textColor}>
            회원가입
          </Text>
        </Link>
        <span css={dividerStyle} />
        <Text tag="md2-text-regular" css={textColor}>
          비밀번호 찾기
        </Text>
      </Flex>
    </Flex>
  );
};

export default Login;
