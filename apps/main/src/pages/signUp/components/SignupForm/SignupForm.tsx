import { Input, Button, Flex, Text } from '@seoulmilk/ui';
import { SelectDropdown } from '@seoulmilk/ui';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

const mockUsers = ['123456', '654321']; // 서버 예시 데이터 (등록된 사번)

interface SignupFormProps {
  type: 'admin' | 'user';
}

interface SignupData {
  id: string;
  email: string;
  emailDomain: string;
  password: string;
  confirmPassword: string;
}

const SignupForm = ({ type }: SignupFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    clearErrors,
    setValue,
    watch,
  } = useForm<SignupData>({
    mode: 'onChange',
  });

  const [serverError, setServerError] = useState('');

  const onSubmit = (data: SignupData) => {
    setServerError(''); // 서버 에러 초기화

    if (!mockUsers.includes(data.id)) {
      setError('id', { message: '등록되지 않은 사번이에요.' });
      return;
    }

    alert('회원가입 성공!');
  };

  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{8,}$/;
  const isDisabled =
    !watch('id') || !watch('email') || !watch('emailDomain') || !watch('password') || !watch('confirmPassword');

  return (
    <form onSubmit={handleSubmit(onSubmit)} css={{ width: '42rem', marginTop: '2rem' }}>
      <Flex styles={{ direction: 'column', gap: '4rem' }}>
        {/* 사번 입력 */}
        <Input
          title="사번"
          placeholder="사번을 입력해주세요."
          value={watch('id') || ''}
          onChange={(e) => {
            setValue('id', e.target.value);
            clearErrors('id');
          }}
          errorMessage={errors.id?.message}
          width="42rem"
        />

        {/* 이메일 입력 */}
        <Flex styles={{ gap: '1rem', align: 'center' }}>
          <Input
            title="이메일"
            placeholder="이메일"
            value={watch('email') || ''}
            onChange={(e) => setValue('email', e.target.value)}
            width="19.3rem"
          />
          <Text tag="md1-text-semibold" css={{ marginTop: '2rem' }}>
            @
          </Text>
          <Flex styles={{ marginTop: '2.5rem' }}>
            <SelectDropdown
              type="email"
              value={watch('emailDomain')}
              onSelect={(domain) => setValue('emailDomain', domain)}
            />
          </Flex>
        </Flex>

        {/* 비밀번호 입력 */}
        <Input
          title="비밀번호"
          description="영문, 숫자를 포함한 8자 이상의 비밀번호를 입력해주세요."
          type="password"
          placeholder="비밀번호"
          value={watch('password') || ''}
          onChange={(e) => {
            setValue('password', e.target.value);
            clearErrors('password');
          }}
          errorMessage={
            watch('password') && !passwordRegex.test(watch('password'))
              ? '비밀번호는 영문, 숫자를 포함하여 8자 이상이어야 해요.'
              : ''
          }
          width="42rem"
        />

        {/* 비밀번호 확인 */}
        <Input
          title="비밀번호 확인"
          type="password"
          placeholder="비밀번호 확인"
          value={watch('confirmPassword') || ''}
          onChange={(e) => setValue('confirmPassword', e.target.value)}
          errorMessage={
            watch('confirmPassword') && watch('password') !== watch('confirmPassword')
              ? '비밀번호가 일치하지 않습니다.'
              : ''
          }
          width="42rem"
        />

        {/* 회원가입 버튼 */}
        <Button type="submit" variant="primary" disabled={isDisabled} css={{ width: '100%', marginTop: '4rem' }}>
          회원가입
        </Button>
      </Flex>
    </form>
  );
};

export default SignupForm;
