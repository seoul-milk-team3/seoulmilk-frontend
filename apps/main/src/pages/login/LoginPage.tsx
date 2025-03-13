import { useLoginMutation } from '@seoulmilk/api';
import { PostLoginRequestBody } from '@seoulmilk/api/src/login/types';
import { IcLoginLogo } from '@seoulmilk/icon';
import { Input, Button, Flex, Text } from '@seoulmilk/ui';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { dividerStyle, textColor } from './LoginPage.style';

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    clearErrors,
    setValue,
    watch,
  } = useForm<PostLoginRequestBody>({
    mode: 'onChange',
  });

  const { mutate } = useLoginMutation(setError);

  const onSubmit = (data: PostLoginRequestBody) => {
    mutate(data);
  };

  const isDisabled = !watch('employeeId') || !watch('password');

  return (
    <Flex styles={{ direction: 'column', align: 'center', paddingTop: '9.6rem', height: '100vh' }}>
      <IcLoginLogo width={180} height={64} />

      <form onSubmit={handleSubmit(onSubmit)} css={{ width: '42rem', marginTop: '3.6rem' }}>
        <Flex styles={{ direction: 'column', gap: '1.2rem' }}>
          <Input
            placeholder="사번"
            type="text"
            {...register('employeeId', { required: '사번을 입력해주세요.' })}
            value={watch('employeeId') || ''}
            onChange={(e) => {
              setValue('employeeId', e.target.value);
              clearErrors('employeeId');
            }}
            errorMessage={errors.employeeId?.message}
            width="42rem"
          />
          <Input
            type="password"
            placeholder="비밀번호"
            {...register('password', { required: '비밀번호를 입력해주세요.' })}
            value={watch('password') || ''}
            onChange={(e) => {
              setValue('password', e.target.value);
              clearErrors('password');
            }}
            errorMessage={errors.password?.message}
            width="42rem"
          />

          <Button
            type="submit"
            variant="secondary"
            padding="1.7rem 16.65rem"
            disabled={isDisabled}
            css={{ marginTop: '0.8rem' , whiteSpace: "nowrap" }}>
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
