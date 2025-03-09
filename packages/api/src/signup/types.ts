export interface SignupRequestBody {
  name: string;
  employeeId: string;
  password: string;
  email: string;
  phoneNo: string;
  birthday: string;
  telecom: "SKT" | "KT" | "LG";
  role: "ADMIN" | "OFFICE";
}

export interface SignupResponse {
  status: number;
  message: string;
  data: string;
}

export interface SignupBranchRequestBody {
  businessId: string;
  phoneNo: string;
  email: string;
  password: string;
}
