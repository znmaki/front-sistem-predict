import { ApiResponse } from "../../../shared/interfaces/apiResponse";
import { apiService } from "../../../shared/services/axios";

export type UserRegistration = {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
};

export const useRegister = (user: UserRegistration) => {
  return apiService.post<ApiResponse<null>>("/auth/register", user);
};
