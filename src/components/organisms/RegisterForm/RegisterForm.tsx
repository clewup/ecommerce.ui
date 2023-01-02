import "./register-form.scss";
import { Field, FormikProps } from "formik";
import { IRegister } from "../../../types/IRegister";
import Input from "../../atoms/Input/Input";
import Text from "../../atoms/Text/Text";
import { LoadingButton } from "@mui/lab";
import { Button } from "@mui/material";
import React from "react";
import { AxiosError } from "axios";
import { useNavigate } from "react-router-dom";

interface IProps {
  formik: FormikProps<IRegister>;
  isLoading: boolean;
  error: AxiosError | null;
}

const RegisterForm: React.FC<IProps> = ({ formik, isLoading, error }) => {
  const navigate = useNavigate();

  return (
    <div id={"register-form"}>
      <Field
        name={"firstName"}
        component={Input}
        label={"First Name"}
        onChange={formik.handleChange}
      />

      <Field
        name={"lastName"}
        component={Input}
        label={"Last Name"}
        onChange={formik.handleChange}
      />

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

      <Field
        name={"confirmPassword"}
        component={Input}
        label={"Confirm Password"}
        isPassword={true}
        onChange={formik.handleChange}
      />

      {error && <Text>{error.message}</Text>}

      <div className={"register-action-buttons"}>
        <LoadingButton
          type={"submit"}
          variant={"contained"}
          color={"success"}
          loading={isLoading}
        >
          Register
        </LoadingButton>
        <Button
          type={"submit"}
          color={"_black"}
          onClick={() => navigate("/login")}
        >
          Login
        </Button>
      </div>
    </div>
  );
};
export default RegisterForm;
