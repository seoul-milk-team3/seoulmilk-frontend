interface SignupRequestBody {
  name: string;
  employeeId: string;
  password: string;
  email: string;
  phoneNo: string;
  birthday: string;
  telecom: "SKT" | "KT" | "LG";
  role: "ADMIN" | "OFFICE";
}

interface SignupResponse {
  status: number;
  message: string;
  data: string;
}
