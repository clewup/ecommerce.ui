import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useContext } from "react";
import useLogin from "../../../hooks/useLogin";
import "./login.scss";
import { LoadingButton } from "@mui/lab";
import { AuthContext } from "../../../contexts/Auth";
import { useNavigate } from "react-router-dom";
import Subheading, { subheadingSize } from "../../atoms/Subheading/Subheading";
import Input from "../../atoms/Input/Input";
import { Button } from "@mui/material";
import { initialLoginValues } from "../../../types/ILogin";
import Wrapper from "../../atoms/Wrapper/Wrapper";

const Login = () => {
  const { isLoading, error, validationSchema, loginUser } = useLogin();
  const { isAuthenticated } = useContext(AuthContext);

  const navigate = useNavigate();

  if (isAuthenticated) {
    navigate(-1);
  }

  return (
    <Wrapper id={"login"}>
      <Formik
        initialValues={initialLoginValues}
        validationSchema={validationSchema}
        onSubmit={(values) => loginUser(values)}
      >
        {(formik) => {
          return (
            <Form className={"login-form"}>
              <Subheading size={subheadingSize.MEDIUM}>Login</Subheading>
              <Field
                name={"email"}
                component={Input}
                label={"Email"}
                onChange={formik.handleChange}
              />
              <ErrorMessage name={"email"} />

              <Field
                name={"password"}
                component={Input}
                label={"Password"}
                isPassword={true}
                onChange={formik.handleChange}
              />
              <ErrorMessage name={"password"} />

              {error && <p>{error.message}</p>}

              <div className={"login-action-buttons"}>
                <LoadingButton
                  type={"submit"}
                  variant={"contained"}
                  color={"success"}
                  loading={isLoading}
                >
                  Login
                </LoadingButton>
                <Button
                  type={"submit"}
                  color={"info"}
                  onClick={() => navigate("/register")}
                >
                  Register
                </Button>
              </div>
            </Form>
          );
        }}
      </Formik>
    </Wrapper>
  );
};
export default Login;
