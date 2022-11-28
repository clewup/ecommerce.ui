import { Field, Form, Formik } from "formik";
import React, { useContext, useState } from "react";
import { LoadingButton } from "@mui/lab";
import "./register.scss";
import { AuthContext } from "../../../contexts/Auth";
import { useNavigate } from "react-router-dom";
import Subheading from "../../atoms/Subheading/Subheading";
import Input from "../../atoms/Input/Input";
import { Button } from "@mui/material";
import { initialRegisterValues, IRegister } from "../../../types/IRegister";
import useRegister from "../../../hooks/useRegister";

const Register = () => {
  const [register, setRegister] = useState<IRegister>();

  const { isLoading, error } = useRegister(register);
  const { isAuthenticated } = useContext(AuthContext);

  const navigate = useNavigate();

  if (isAuthenticated) {
    navigate("/");
  }

  return (
    <div id={"register"}>
      <Formik
        initialValues={initialRegisterValues}
        onSubmit={(values) => setRegister(values)}
      >
        {(formik) => {
          return (
            <Form className={"register-form"}>
              <Subheading>Login</Subheading>
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

              {error && <p>{error.message}</p>}

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
                  color={"info"}
                  onClick={() => navigate("/login")}
                >
                  Login
                </Button>
              </div>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};
export default Register;
