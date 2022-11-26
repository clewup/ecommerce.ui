import { FieldAttributes, FormikFormProps } from "formik";
import { MenuItem, Select } from "@mui/material";

interface IProps {
  field?: FieldAttributes<any>;
  label?: string;
  disabled?: boolean;
  value?: unknown;
  onChange?: (e: any) => void;
  options: any;
}

const SelectInput: React.FC<IProps> = ({
  field,
  label,
  disabled = false,
  value,
  onChange,
  options,
}) => {
  return (
    <Select
      {...field}
      label={label}
      disabled={disabled}
      value={value ?? value}
      onChange={onChange ?? onChange}
      sx={{ m: 1, minWidth: 170 }}
    >
      <MenuItem value={"all"}>All</MenuItem>
      {options?.map((option: string) => {
        return (
          <MenuItem key={option} value={option}>
            {option}
          </MenuItem>
        );
      })}
    </Select>
  );
};
export default SelectInput;
