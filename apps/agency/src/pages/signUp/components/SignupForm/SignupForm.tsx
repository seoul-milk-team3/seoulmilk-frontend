import { useBranchSignupMutation } from '@seoulmilk/api/src/signup/queries';
import { Input, Button, Flex, Text } from '@seoulmilk/ui';
import { SelectDropdown } from '@seoulmilk/ui';
import useMediaQuery from '@seoulmilk/utils/src/hooks/useMediaQuery';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

interface SignupData {
  businessNumber: string;
  email: string;
  emailDomain: string;
  phoneNumber: string;
  password: string;
  confirmPassword: string;
}

const SignupForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    clearErrors,
    setValue,
    reset,
    watch,
  } = useForm<SignupData>({
    mode: 'onChange',
  });

  const isMobile = useMediaQuery('(max-width: 768px)');
  const formWidth = isMobile ? '36.1rem' : '42rem';
  const emailWidth = isMobile ? '16.1rem' : '19.3rem';
  const [serverError, setServerError] = useState('');

  const { mutate } = useBranchSignupMutation(setError);

  const onSubmit = (data: SignupData) => {
    setServerError(''); // 서버 에러 초기화

    const requestBody = {
      businessId: data.businessNumber, // 사업자 등록번호를 businessId로 변환
      phoneNo: data.phoneNumber, // 전화번호
      email: `${data.email}@${data.emailDomain}`, // 이메일 도메인 포함
      password: data.password, // 비밀번호
    };

    console.log('데이터', requestBody);

    mutate(requestBody);
  };

  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
  const phoneRegex = /^[0-9]{11}$/; // 숫자 11자리만 허용

  const isDisabled =
    !watch('businessNumber')?.trim() ||
    !watch('email')?.trim() ||
    !watch('emailDomain')?.trim() ||
    !watch('phoneNumber')?.trim() ||
    !watch('password')?.trim() ||
    !watch('confirmPassword')?.trim() ||
    Object.keys(errors).length > 0 ||
    (!!watch('phoneNumber') && !phoneRegex.test(watch('phoneNumber') ?? '')) || // 전화번호 형식 체크
    (!!watch('password') && !passwordRegex.test(watch('password') ?? '')) || // 비밀번호 형식 체크
    (!!watch('confirmPassword') && watch('password') !== watch('confirmPassword')); // 비밀번호 일치 체크

  return (
    <form onSubmit={handleSubmit(onSubmit)} css={{ width: formWidth, marginTop: '2rem' }}>
      <Flex styles={{ direction: 'column', gap: '4rem' }}>
        {/* 사업자 등록번호 입력 */}
        <Input
          title="사업자 등록번호"
          placeholder="사업자 등록번호를 입력해주세요."
          value={watch('businessNumber') || ''}
          onChange={(e) => {
            setValue('businessNumber', e.target.value);
            clearErrors('businessNumber');
          }}
          errorMessage={errors.businessNumber?.message}
          width={formWidth}
        />

        {/* 전화번호 입력 */}
        <Input
          title="전화번호"
          placeholder="전화번호를 입력해주세요."
          value={watch('phoneNumber') || ''}
          onChange={(e) => {
            const onlyNumbers = e.target.value.replace(/\D/g, ''); // 숫자만 허용
            setValue('phoneNumber', onlyNumbers);
            clearErrors('phoneNumber');
          }}
          errorMessage={
            watch('phoneNumber') && !phoneRegex.test(watch('phoneNumber')) ? '전화번호는 숫자 11자리여야 해요.' : ''
          }
          width={formWidth}
        />

        {/* 이메일 입력 */}
        <Flex styles={{ gap: '1rem', align: 'center' }}>
          <Input
            title="이메일"
            placeholder="이메일"
            value={watch('email') || ''}
            onChange={(e) => {
              setValue('email', e.target.value);
              clearErrors('email');
            }}
            width={emailWidth}
            errorMessage={errors.email?.message}
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
            watch('password') && watch('password')?.length > 0 && watch('password')?.length < 8
              ? '비밀번호는 8자 이상이어야 해요.'
              : watch('password') && !passwordRegex.test(watch('password'))
                ? '비밀번호는 영문, 숫자를 포함해야 해요.'
                : ''
          }
          width={formWidth}
        />

        {/* 비밀번호 확인 */}
        <Input
          title="비밀번호 확인"
          type="password"
          placeholder="비밀번호 확인"
          value={watch('confirmPassword') || ''}
          onChange={(e) => setValue('confirmPassword', e.target.value)}
          errorMessage={
            watch('confirmPassword')?.length > 0 && watch('password') !== watch('confirmPassword')
              ? '비밀번호가 일치하지 않습니다.'
              : ''
          }
          width={formWidth}
        />

        {/* 회원가입 버튼 */}
        <Button
          type="submit"
          variant="secondary"
          padding={isMobile ? '1.35rem 0rem' : '1.7rem 16.65rem'}
          disabled={isDisabled}
          css={{ width: '100%', marginTop: '4rem' }}>
          회원가입
        </Button>
      </Flex>
    </form>
  );
};

export default SignupForm;
