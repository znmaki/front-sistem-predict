import { Grid, Typography } from "@mui/material";
/* import Logo from '../../assets/svg-deepstocked (1).svg' */
import Logo from "../../../assets/svg-deepstocked (1).svg";
import Logo1 from "../../../assets/aea.svg";
import { Link } from "react-router-dom";
import { useValidation } from "../../../hooks";
import { inputFormLogin, FormUser } from "../../../shared";
import { UserLogin, UserLoginResponse, useLogin } from "../hooks/useLogin";
import { ApiResponse } from "../../../shared/interfaces/apiResponse";
import { apiService } from "../../../shared/services/axios";
import { setAccessToken, setRefreshToken } from "../../../shared/utils/token";

const LoginUser = () => {
  const validationSchema = useValidation(inputFormLogin);

  const initialValues = {
    email: "",
    password: "",
  };

  const handleSubmit = async (values: UserLogin) => {
    console.log("executes submit login");
    const response = await apiService.post<ApiResponse<UserLoginResponse>>(
      "/auth/login",
      values
    );
    console.log(response);
    if (response.status == 200) {
      const { accessToken, refreshToken, user } = response.body;
      console.log(response.body);
      setAccessToken(accessToken);
      setRefreshToken(refreshToken);
      // setUserDataCookie(user);
    } else if (response.status == 401) {
      console.log("Usuario o contraseña incorrectos");
    }
  };

  return (
    <Grid container className="h-screen">
      <Grid item xs={6}>
        <div className="flex flex-col items-center">
          <div className="w-[50%] space-y-4">
            <img src={Logo} alt="Logo" />
            <Typography variant="h5">Iniciar Sesión</Typography>
            <div>
              <FormUser
                inputConfigs={inputFormLogin}
                initialValues={initialValues}
                onSubmit={handleSubmit}
                validationSchema={validationSchema}
                txtBtn="Iniciar Sesión"
              />
            </div>
            <Typography component="p" className="text-center">
              No tienes una cuenta?{" "}
              <Link to="/create-account" className="text-[#FFB347]">
                Crear una cuenta
              </Link>
            </Typography>
          </div>
        </div>
      </Grid>
      <Grid item xs={6} className="bg-[#FFB347] flex">
        <img src={Logo1} alt="Logo" className="m-auto" />
      </Grid>
    </Grid>
  );
};

export default LoginUser;
