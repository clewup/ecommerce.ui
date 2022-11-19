import { useFormik } from "formik";
import { useState } from "react";
import useLogin from "../../../hooks/useLogin";

interface ILogin {
  email: string;
  password: string;
}

const Login = () => {
  const [login, setLogin] = useState<ILogin>({ email: "", password: "" });

  const { loading, error } = useLogin(login);

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

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error.message}</p>;

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
          type={"text"}
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
