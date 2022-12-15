import { FieldAttributes } from "formik";
import { InputLabel, MenuItem, Select } from "@mui/material";
import React from "react";

interface IProps {
  field?: FieldAttributes<any>;
  label?: string;
  disabled?: boolean;
  value?: unknown;
  onChange?: (e: any) => void;
  options: any;
  showAll?: boolean;
  width?: string;
}

const SelectInput: React.FC<IProps> = ({
  field,
  label,
  disabled = false,
  value,
  onChange,
  options,
  showAll,
  width,
}) => {
  return (
    <>
      <InputLabel>{label}</InputLabel>
      <Select
        {...field}
        disabled={disabled}
        value={value ?? value}
        onChange={onChange ?? onChange}
        sx={{
          marginTop: 1,
          marginBottom: 1,
          backgroundColor: "white",
          textAlign: "center",
          width: width ?? "100%",
        }}
      >
        {showAll && <MenuItem value={"all"}>All</MenuItem>}
        {options?.map((option: string) => {
          return (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          );
        })}
      </Select>
    </>
  );
};
export default SelectInput;
