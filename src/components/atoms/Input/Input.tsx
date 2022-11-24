import { TextField } from "@mui/material";
import { FieldAttributes, FieldProps, FormikErrors, getIn } from "formik";

interface IProps {
  field: FieldAttributes<any>;
  label: string;
  form: {
    errors: FormikErrors<any>;
  };
  isPassword: boolean;
  disabled: boolean;
}

const Input: React.FC<IProps> = ({
  field,
  label,
  form: { errors },
  isPassword,
  disabled = false,
}) => {
  const errorMessage = getIn(errors, field.name);
  return (
    <TextField
      {...field}
      label={label}
      type={isPassword ? "password" : "text"}
      disabled={disabled}
    />
  );
};
export default Input;
