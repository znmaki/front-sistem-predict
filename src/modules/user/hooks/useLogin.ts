import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'

import {
  getAccessToken,
  setAccessToken,
  setLoginUser,
  setRefreshToken,
} from "../../../shared/utils/token";

import { ApiResponse, apiService } from "../../../shared";
import { useQueryClient } from "@tanstack/react-query";

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
  const queryClient = useQueryClient();

  queryClient.setQueryData(['isCaptcha'], true)

  const handleSubmit = async (values: UserLogin) => {
    const valueCaptcha = queryClient.getQueryData(['valueCaptcha']);

    if (valueCaptcha) {
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
    }
    else {
      queryClient.setQueryData(['isCaptcha'], false);
      Swal.fire({
        position: 'bottom-end',
        icon: 'error',
        title: `Debe Realizar el CAPTCHA`,
        showConfirmButton: false,
        backdrop: false,
        timer: 1500,
      })
    }

    /* const response = await apiService.post<ApiResponse<UserLoginResponse>>(
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
    } */
  };

  const handleCaptcha = (value: any) => {
    queryClient.setQueryData(['valueCaptcha'], value);
  }

  return {
    //Properties
    isLogin,
    //Methods
    handleSubmit,
    handleCaptcha
    //Getters

    //Mutations
  };
};
