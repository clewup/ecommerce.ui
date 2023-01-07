import "./register-form.scss";
import { Field, Form, Formik } from "formik";
import { IRegister } from "../../../interfaces/IRegister";
import Input from "../../atoms/Input/Input";
import Text from "../../atoms/Text/Text";
import { LoadingButton } from "@mui/lab";
import { Button } from "@mui/material";
import React from "react";
import { AxiosError } from "axios";
import { useNavigate } from "react-router-dom";
import {
  registerInitialValues,
  registerValidationSchema,
} from "./utils/schema";

interface IProps {
  isLoading: boolean;
  error: AxiosError | null;
  registerUser: (register: IRegister) => void;
}

const RegisterForm: React.FC<IProps> = ({ isLoading, error, registerUser }) => {
  const navigate = useNavigate();

  return (
    <Formik
      initialValues={registerInitialValues}
      validationSchema={registerValidationSchema}
      onSubmit={(values) => registerUser(values)}
    >
      {(formik) => {
        return (
          <Form>
            <div id={"register-form"}>
              <Field
                name={"firstName"}
                component={Input}
                placeholder={"First Name"}
                onChange={formik.handleChange}
              />

              <Field
                name={"lastName"}
                component={Input}
                placeholder={"Last Name"}
                onChange={formik.handleChange}
              />

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

              <Field
                name={"confirmPassword"}
                component={Input}
                placeholder={"Confirm Password"}
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
          </Form>
        );
      }}
    </Formik>
  );
};
export default RegisterForm;
