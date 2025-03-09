import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { postSignup, postBranchSignup } from ".";
import { useNavigate } from "react-router-dom";

/**
 * 회원가입 Mutation 훅
 */
export const useSignupMutation = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: postSignup,

    onSuccess: () => {
      alert("✅ 회원가입이 성공적으로 완료되었습니다!");
      navigate("/login"); // 회원가입 후 로그인 페이지로 이동
    },

    onError: (error: AxiosError) => {
      console.error("회원가입 실패:", error);

      if (!error.response) {
        alert("❌ 네트워크 오류가 발생했습니다. 다시 시도해주세요.");
        return;
      }

      const { status } = error.response;

      if (status === 409) {
        alert("❌ 이미 등록된 회원 정보입니다.");
      } else {
        alert("❌ 회원가입에 실패했습니다. 다시 시도해주세요.");
      }
    },
  });
};

export const useBranchSignupMutation = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: postBranchSignup,

    onSuccess: () => {
      alert("✅ 회원가입이 성공적으로 완료되었습니다!");
      navigate("/login"); // 회원가입 후 로그인 페이지로 이동
    },

    onError: (error: AxiosError) => {
      console.error("회원가입 실패:", error);

      if (!error.response) {
        alert("❌ 네트워크 오류가 발생했습니다. 다시 시도해주세요.");
        return;
      }

      const { status } = error.response;

      if (status === 409) {
        alert("❌ 이미 등록된 회원 정보입니다.");
      } else {
        alert("❌ 회원가입에 실패했습니다. 다시 시도해주세요.");
      }
    },
  });
};
