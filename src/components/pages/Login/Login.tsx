import { useFormik } from "formik";
import { useEffect, useState } from "react";

interface ILogin {
  email: string;
  password: string;
}

const Login = () => {
  const [login, setLogin] = useState<ILogin>({ email: "", password: "" });

  useEffect(() => {}, [login]);

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
