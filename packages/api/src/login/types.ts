export interface PostLoginRequestBody {
  employeeId: string;
  password: string;
}

export interface PostLoginResponse {
  data: {
    accessToken: string;
    refreshToken: string;
  };
}
