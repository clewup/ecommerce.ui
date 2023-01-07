import "./login-form.scss";
import React from "react";
import { Field, Form, Formik } from "formik";
import Input from "../../atoms/Input/Input";
import Text from "../../atoms/Text/Text";
import { LoadingButton } from "@mui/lab";
import { Button } from "@mui/material";
import { AxiosError } from "axios";
import { useNavigate } from "react-router-dom";
import { ILogin } from "../../../interfaces/ILogin";
import { loginInitialValues, loginValidationSchema } from "./utils/schema";

interface IProps {
  isLoading: boolean;
  error: AxiosError | null;
  loginUser: (login: ILogin) => void;
}

const LoginForm: React.FC<IProps> = ({ isLoading, error, loginUser }) => {
  const navigate = useNavigate();

  return (
    <Formik
      initialValues={loginInitialValues}
      validationSchema={loginValidationSchema}
      onSubmit={(values) => loginUser(values)}
    >
      {(formik) => {
        return (
          <Form>
            <div id={"login-form"}>
              <Field
                name={"email"}
                component={Input}
                placeholder={"Email"}
                onChange={formik.handleChange}
              />

              <Field
                name={"password"}
                component={Input}
                placeholder={"Password"}
                isPassword={true}
                onChange={formik.handleChange}
              />

              {error && <Text>{error.response?.data}</Text>}

              <div className={"login-action-buttons"}>
                <Button
                  type={"button"}
                  color={"_black"}
                  onClick={() => navigate("/register")}
                >
                  Register
                </Button>
                <LoadingButton
                  type={"submit"}
                  variant={"contained"}
                  color={"success"}
                  loading={isLoading}
                >
                  Login
                </LoadingButton>
              </div>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
};
export default LoginForm;
