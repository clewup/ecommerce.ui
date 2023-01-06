import React, { useContext, useEffect } from "react";
import useLogin from "../../../hooks/useLogin";
import "./login.scss";
import { AuthContext } from "../../../contexts/Auth";
import { useNavigate } from "react-router-dom";
import Wrapper from "../../atoms/Wrapper/Wrapper";
import LoginForm from "../../organisms/LoginForm/LoginForm";

const Login = () => {
  const { isLoading, error, loginUser } = useLogin();
  const { isAuthenticated } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate(-1);
    }
    // eslint-disable-next-line
  }, [isAuthenticated]);

  return (
    <Wrapper id={"login"}>
      <LoginForm isLoading={isLoading} error={error} loginUser={loginUser} />
    </Wrapper>
  );
};
export default Login;
