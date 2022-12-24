import { Form, Formik } from "formik";
import React, { useContext, useEffect } from "react";
import "./register.scss";
import { AuthContext } from "../../../contexts/Auth";
import { useNavigate } from "react-router-dom";
import { initialRegisterValues } from "../../../types/IRegister";
import useRegister from "../../../hooks/useRegister";
import Wrapper from "../../atoms/Wrapper/Wrapper";
import RegisterForm from "../../organisms/RegisterForm/RegisterForm";

const Register = () => {
  const { isLoading, error, validationSchema, registerUser } = useRegister();
  const { isAuthenticated } = useContext(AuthContext);

  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/");
    }
  });

  return (
    <Wrapper id={"register"}>
      <Formik
        initialValues={initialRegisterValues}
        validationSchema={validationSchema}
        onSubmit={(values) => registerUser(values)}
      >
        {(formik) => {
          return (
            <Form>
              <RegisterForm
                formik={formik}
                isLoading={isLoading}
                error={error}
              />
            </Form>
          );
        }}
      </Formik>
    </Wrapper>
  );
};
export default Register;
