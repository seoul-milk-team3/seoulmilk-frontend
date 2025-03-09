export interface PostLoginRequestBody {
  employeeId: string;
  password: string;
}

export interface PostLoginResponse {
  status: number;
  message: string;
  data: string;
}

export interface PostBranchLoginRequestBody {
  businessId: string;
  password: string;
}
