import { TextField } from "@mui/material";
import { FieldAttributes } from "formik";

interface IProps {
  field?: FieldAttributes<any>;
  label?: string;
  isPassword?: boolean;
  disabled?: boolean;
  value?: unknown;
  onChange?: (e: any) => void;
}

const Input: React.FC<IProps> = ({
  field,
  label,
  isPassword,
  disabled = false,
  value,
  onChange,
}) => {
  return (
    <TextField
      {...field}
      label={label}
      type={isPassword ? "password" : "text"}
      disabled={disabled}
      value={value ?? value}
      onChange={onChange ?? onChange}
      sx={{
        m: 1,
        backgroundColor: "white",
        textAlign: "center",
      }}
    />
  );
};
export default Input;
