import { useFormik } from "formik";
import { useContext, useState } from "react";
import useLogin from "../../../hooks/useLogin";
import "./login.scss";
import { AuthContext } from "../../../contexts/Auth";
import { useNavigate } from "react-router-dom";

interface ILogin {
  email: string;
  password: string;
}

const Login = () => {
  const [login, setLogin] = useState<ILogin>({ email: "", password: "" });

  const { loading, error } = useLogin(login);
  const { isAuthenticated } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleSubmit = (values: ILogin) => {
    setLogin(values);
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => handleSubmit(values),
  });

  if (isAuthenticated) {
    navigate("/");
  }

  return (
    <div id={"login"}>
      <form onSubmit={formik.handleSubmit}>
        <input
          type={"text"}
          id="email"
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
        />
        <input
          type={"password"}
          id="password"
          name="password"
          value={formik.values.password}
          onChange={formik.handleChange}
        />
        <button type={"submit"}>Login</button>
      </form>
    </div>
  );
};
export default Login;
