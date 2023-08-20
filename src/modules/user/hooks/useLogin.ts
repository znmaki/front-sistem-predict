import { ApiResponse } from "../../../shared/interfaces/apiResponse";
import { apiService } from "../../../shared/services/axios";

export type UserLogin = {
  email: string;
  password: string;
};

export type UserLoginResponse = {
  user: object;
  accessToken: string;
  refreshToken: string;
};

export const useLogin = (user: UserLogin) => {
  return apiService.post<ApiResponse<UserLoginResponse>>("/auth/login", user);
};
