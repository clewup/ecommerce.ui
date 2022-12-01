import { Field, Form, Formik } from "formik";
import React, { useContext, useState } from "react";
import useLogin from "../../../hooks/useLogin";
import "./login.scss";
import { LoadingButton } from "@mui/lab";
import { AuthContext } from "../../../contexts/Auth";
import { useNavigate } from "react-router-dom";
import Subheading, { subheadingSize } from "../../atoms/Subheading/Subheading";
import Input from "../../atoms/Input/Input";
import { Button } from "@mui/material";
import { ILogin, initialLoginValues } from "../../../types/ILogin";

const Login = () => {
  const [login, setLogin] = useState<ILogin>();

  const { isLoading, error } = useLogin(login);
  const { isAuthenticated } = useContext(AuthContext);

  const navigate = useNavigate();

  if (isAuthenticated) {
    navigate("/");
  }

  return (
    <div id={"login"}>
      <Formik
        initialValues={initialLoginValues}
        onSubmit={(values) => setLogin(values)}
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
              <Field
                name={"password"}
                component={Input}
                label={"Password"}
                isPassword={true}
                onChange={formik.handleChange}
              />

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
    </div>
  );
};
export default Login;
