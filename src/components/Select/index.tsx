import { ChangeEvent, ReactNode } from "react";
import {
  FormControl,
  InputLabel,
  FormHelperText,
  SelectChangeEvent,
} from "@mui/material";

import { Base } from "./styles";

interface SelectProps {
  id: string;
  value: string;
  label: string;
  name?: string;
  helperText?: string;
  error?: boolean;
  required?: boolean;
  children: ReactNode;
  onChange?: (e: SelectChangeEvent<unknown>) => void;
}

const Select = ({
  id,
  value,
  name,
  label,
  error,
  children,
  required,
  helperText,
  onChange,
}: SelectProps) => {
  const labelId = `${label}-label`;
  return (
    <FormControl fullWidth>
      <InputLabel required={required} error={error} id={labelId}>
        {label}
      </InputLabel>
      <Base
        id={id}
        name={name}
        required={required}
        labelId={labelId}
        label={label}
        error={error}
        value={value}
        onChange={onChange}
      >
        {children}
      </Base>
      {helperText!.length > 0 && (
        <FormHelperText error={error}>{helperText}</FormHelperText>
      )}
    </FormControl>
  );
};

Select.defaultProps = {
  helperText: "",
};

export default Select;
