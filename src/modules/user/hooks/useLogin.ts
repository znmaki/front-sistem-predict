import { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  getAccessToken,
  setAccessToken,
  setLoginUser,
  setRefreshToken,
} from "../../../shared/utils/token";

import { ApiResponse, apiService } from "../../../shared";

export type UserLogin = {
  email: string;
  password: string;
};

export type UserLoginResponse = {
  user: string;
  accessToken: string;
  refreshToken: string;
};

export const useLogin = () => {
  const [isLogin] = useState<boolean>(typeof getAccessToken() !== "undefined");
  const navigate = useNavigate();

  const handleSubmit = async (values: UserLogin) => {
    const response = await apiService.post<ApiResponse<UserLoginResponse>>(
      "/auth/login",
      values
    );
    if (response.status == 200) {
      const { accessToken, refreshToken, user } = response.body;
      setAccessToken(accessToken);
      setRefreshToken(refreshToken);
      setLoginUser(user);
      navigate("/inicio");
    } else if (response.status == 401) {
      console.log("Usuario o contraseña incorrectos");
    }
  };

  return {
    //Properties
    isLogin,
    //Methods
    handleSubmit,
    //Getters

    //Mutations
  };
};
