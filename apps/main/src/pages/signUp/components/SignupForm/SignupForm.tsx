import { useSignupMutation } from '@seoulmilk/api';
import { Input, Button, Flex, Text } from '@seoulmilk/ui';
import { SelectDropdown } from '@seoulmilk/ui';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';

interface SignupData {
  name: string;
  employeeId: string;
  email: string;
  emailDomain: string;
  phoneNo: string;
  birthday: string;
  telecom: 'SKT' | 'KT' | 'LG';
  password: string;
  confirmPassword: string;
  role: 'ADMIN' | 'OFFICE';
}

const SignupForm = ({ type }: { type: 'admin' | 'user' }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
    clearErrors,
    reset,
  } = useForm<SignupData>({ mode: 'onChange' });

  const { mutate } = useSignupMutation();

  useEffect(() => {
    reset();
    setValue('role', type === 'admin' ? 'ADMIN' : 'OFFICE'); // role 값을 명확하게 설정
    console.log('룰', type);
  }, [type, reset, setValue]);

  const onSubmit = (data: SignupData) => {
    mutate({
      name: data.name,
      employeeId: data.employeeId,
      password: data.password,
      email: `${data.email}@${data.emailDomain}`,
      phoneNo: data.phoneNo,
      birthday: data.birthday,
      telecom: data.telecom,
      role: type === 'admin' ? 'ADMIN' : 'OFFICE',
    });

    console.log('데이터', data);
  };

  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

  const isDisabled =
    !watch('name')?.trim() ||
    !watch('employeeId')?.trim() ||
    !watch('email')?.trim() ||
    !watch('emailDomain')?.trim() ||
    watch('phoneNo')?.length !== 11 ||
    watch('birthday')?.length !== 8 ||
    !watch('telecom') ||
    !watch('password')?.trim() ||
    !watch('confirmPassword')?.trim() ||
    Object.keys(errors).length > 0 ||
    (!!watch('password') && watch('password').length >= 8 && !passwordRegex.test(watch('password') ?? '')) ||
    (!!watch('confirmPassword') &&
      watch('confirmPassword').length >= 8 &&
      watch('password') !== watch('confirmPassword'));

  const isValidTelecom = (value: string): value is 'SKT' | 'KT' | 'LG' => {
    return ['SKT', 'KT', 'LG'].includes(value);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} css={{ width: '42rem', marginTop: '2rem' }}>
      <Flex styles={{ direction: 'column', gap: '4rem' }}>
        {/* 이름 */}
        <Input
          title="이름"
          value={watch('name') || ''}
          placeholder="이름을 입력해주세요."
          onChange={(e) => {
            setValue('name', e.target.value);
            clearErrors('name');
          }}
          width="42rem"
        />

        {/* 사번 */}
        <Input
          title="사번"
          value={watch('employeeId') || ''}
          placeholder="사번을 입력해주세요."
          onChange={(e) => {
            setValue('employeeId', e.target.value);
            clearErrors('employeeId');
          }}
          width="42rem"
        />

        {/* 이메일 */}
        <Flex styles={{ gap: '1rem', align: 'center' }}>
          <Input
            title="이메일"
            value={watch('email') || ''}
            placeholder="이메일"
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
              onSelect={(domain: string) => setValue('emailDomain', domain)}
            />
          </Flex>
        </Flex>

        {/* 전화번호 (숫자만 입력 가능) */}
        <Input
          title="전화번호"
          value={watch('phoneNo') || ''}
          placeholder="전화번호를 입력해주세요. {01012341234}"
          onChange={(e) => {
            const numericValue = e.target.value.replace(/\D/g, '').slice(0, 11); // 숫자만 허용, 11자 제한
            setValue('phoneNo', numericValue);
          }}
          width="42rem"
        />

        {/* 생년월일 (숫자만 입력 가능) */}
        <Input
          title="생년월일"
          value={watch('birthday') || ''}
          placeholder="생년월일을 입력해주세요. {YYYYMMDD}"
          onChange={(e) => {
            const numericValue = e.target.value.replace(/\D/g, '').slice(0, 8); // 숫자만 허용, 8자 제한
            setValue('birthday', numericValue);
          }}
          width="42rem"
        />

        {/* 통신사 선택 */}
        <Flex styles={{ direction: 'column', gap: '0.8rem' }}>
          <Text tag="md1-text-semibold">통신사</Text>
          <SelectDropdown
            type="telecom"
            value={watch('telecom')}
            onSelect={(value) => {
              if (isValidTelecom(value)) {
                setValue('telecom', value);
              }
            }}
          />
        </Flex>

        {/* 비밀번호 */}
        <Input
          title="비밀번호"
          type="password"
          description="영문, 숫자를 포함한 8자 이상의 비밀번호를 입력해주세요."
          value={watch('password') || ''}
          placeholder="비밀번호"
          onChange={(e) => {
            setValue('password', e.target.value);
            clearErrors('password');
          }}
          errorMessage={
            watch('password')?.length >= 8 && !passwordRegex.test(watch('password'))
              ? '비밀번호는 영문, 숫자를 포함하여 8자 이상이어야 해요.'
              : ''
          }
          width="42rem"
        />

        {/* 비밀번호 확인 */}
        <Input
          title="비밀번호 확인"
          type="password"
          value={watch('confirmPassword') || ''}
          placeholder="비밀번호 확인"
          onChange={(e) => setValue('confirmPassword', e.target.value)}
          errorMessage={
            watch('confirmPassword')?.length >= 8 && watch('password') !== watch('confirmPassword')
              ? '비밀번호가 일치하지 않습니다.'
              : ''
          }
          width="42rem"
        />

        {/* 회원가입 버튼 */}
        <Button type="submit" variant="secondary" disabled={isDisabled} css={{ width: '100%', marginTop: '4rem' }}>
          회원가입
        </Button>
      </Flex>
    </form>
  );
};

export default SignupForm;
