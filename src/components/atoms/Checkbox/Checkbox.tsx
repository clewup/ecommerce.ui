import { FieldAttributes, FormikFormProps } from "formik";
import { Checkbox as CheckboxInput } from "@mui/material";

interface IProps {
  field?: FieldAttributes<any>;
  label?: string;
  disabled?: boolean;
  value?: unknown;
  onChange?: (e: any) => void;
}

const Checkbox: React.FC<IProps> = ({
  field,
  label,
  disabled = false,
  value,
  onChange,
}) => {
  return (
    <CheckboxInput
      {...field}
      label={label}
      disabled={disabled}
      checked={value ?? value}
      onChange={onChange ?? onChange}
      inputProps={{ "aria-label": "controlled" }}
    />
  );
};
export default Checkbox;
