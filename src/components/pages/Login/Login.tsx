import { Form, Formik } from "formik";
import React, { useContext, useEffect } from "react";
import useLogin from "../../../hooks/useLogin";
import "./login.scss";
import { AuthContext } from "../../../contexts/Auth";
import { useNavigate } from "react-router-dom";
import { initialLoginValues } from "../../../types/ILogin";
import Wrapper from "../../atoms/Wrapper/Wrapper";
import LoginForm from "../../organisms/LoginForm/LoginForm";

const Login = () => {
  const { isLoading, error, validationSchema, loginUser } = useLogin();
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
      <Formik
        initialValues={initialLoginValues}
        validationSchema={validationSchema}
        onSubmit={(values) => loginUser(values)}
      >
        {(formik) => {
          return (
            <Form>
              <LoginForm formik={formik} isLoading={isLoading} error={error} />
            </Form>
          );
        }}
      </Formik>
    </Wrapper>
  );
};
export default Login;
