import React, { useContext, useEffect } from "react";
import "./register.scss";
import { AuthContext } from "../../../contexts/Auth";
import { useNavigate } from "react-router-dom";
import useRegister from "../../../hooks/useRegister";
import Wrapper from "../../atoms/Wrapper/Wrapper";
import RegisterForm from "../../organisms/RegisterForm/RegisterForm";

const Register = () => {
  const { isLoading, error, registerUser } = useRegister();
  const { isAuthenticated } = useContext(AuthContext);

  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/");
    }
  });

  return (
    <Wrapper id={"register"}>
      <RegisterForm
        isLoading={isLoading}
        error={error}
        registerUser={registerUser}
      />
    </Wrapper>
  );
};
export default Register;
