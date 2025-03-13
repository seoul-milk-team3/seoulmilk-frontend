import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { postSignup, postBranchSignup } from ".";
import { useNavigate } from "react-router-dom";
import { UseFormSetError } from "react-hook-form";

/**
 * 회원가입 Mutation 훅
 */
export const useSignupMutation = (setError: UseFormSetError<any>) => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: postSignup,

    onSuccess: () => {
      navigate("/login"); // 회원가입 후 로그인 페이지로 이동
    },

    onError: (error: AxiosError) => {
      console.error("회원가입 실패:", error);

      if (!error.response || !error.response.data) {
        alert("❌ 네트워크 오류가 발생했습니다. 다시 시도해주세요.");
        return;
      }

      const { code, message } = error.response.data as {
        code?: string;
        message?: string;
      };

      if (code === "EXIST_EMPLOYEE_ID") {
        console.log("실패", code);
        setError("employeeId", {
          type: "manual",
          message: "이미 등록된 사번입니다.",
        });
      } else if (code === "EXIST_EMAIL") {
        console.log("실패", code);
        setError("email", {
          type: "manual",
          message: "이미 등록된 이메일입니다.",
        });
      } else {
        alert(`❌ 회원가입에 실패했습니다: ${message || "다시 시도해주세요."}`);
      }
    },
  });
};

export const useBranchSignupMutation = (setError: UseFormSetError<any>) => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: postBranchSignup,

    onSuccess: () => {
      alert("✅ 회원가입이 성공적으로 완료되었습니다!");
      navigate("/login"); // 회원가입 후 로그인 페이지로 이동
    },

    onError: (error: AxiosError) => {
      console.error("회원가입 실패:", error);

      if (!error.response || !error.response.data) {
        alert("❌ 네트워크 오류가 발생했습니다. 다시 시도해주세요.");
        return;
      }

      // ❗ 서버 응답 데이터에서 `code` 값 확인
      const { code, message } = error.response.data as {
        code?: string;
        message?: string;
      };

      if (code === "EXIST_BUSINESS_ID") {
        setError("businessNumber", {
          type: "manual",
          message: "이미 등록된 사업자 등록번호입니다.",
        });
      } else if (code === "EXIST_EMAIL") {
        setError("email", {
          type: "manual",
          message: "이미 등록된 이메일입니다.",
        });
      } else {
        alert(`❌ 회원가입에 실패했습니다: ${message || "다시 시도해주세요."}`);
      }
    },
  });
};
