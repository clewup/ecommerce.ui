import "./login-form.scss";
import React from "react";
import { Field, FormikProps } from "formik";
import Input from "../../atoms/Input/Input";
import Text from "../../atoms/Text/Text";
import { LoadingButton } from "@mui/lab";
import { Button } from "@mui/material";
import { AxiosError } from "axios";
import { useNavigate } from "react-router-dom";
import { ILogin } from "../../../types/ILogin";

interface IProps {
  formik: FormikProps<ILogin>;
  isLoading: boolean;
  error: AxiosError | null;
}

const LoginForm: React.FC<IProps> = ({ formik, isLoading, error }) => {
  const navigate = useNavigate();

  return (
    <div id={"login-form"}>
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

      {error && <Text>{error.message}</Text>}

      <div className={"login-action-buttons"}>
        <Button
          type={"submit"}
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
  );
};
export default LoginForm;
