import DateRangePicker from "@mui/lab/DateRangePicker";
import { InputAdornment, FormHelperText } from "@mui/material";
import { Base, Icon, TextField } from "./styles";

interface DateRangeFieldProps {
  label: string;
  startText: string;
  required?: boolean;
  endText: string;

  startName: string;
  startValue: Date;
  endName: string;
  endValue: Date;
  startError?: boolean;
  endError?: boolean;
  starthelperText?: string;
  endHelperText?: string;
  onStartChange: (event: any) => void;
  onEndChange: (event: any) => void;
}

const DateRangeField = ({
  startName,
  startValue,
  endName,
  endValue,
  onStartChange,
  onEndChange,
  startText,
  endText,
  label,
  required,
  startError,
  endError,
  starthelperText,
  endHelperText,
}: DateRangeFieldProps) => {
  const error = startError || endError;
  const helperText = starthelperText ?? endHelperText ?? "";
  return (
    <>
      <DateRangePicker
        label={label}
        inputFormat="dd MMM yyyy'"
        // NOTE - Masking does not like the above format, adding null suppresses error
        // @ts-expect-error
        mask={null}
        startText={startText}
        endText={endText}
        value={[startValue, endValue]}
        onChange={(v) => {
          console.log(v[0]);
          // fake native change event for Fomik
          onStartChange({ target: { value: v[0], name: startName } });
          onEndChange({ target: { value: v[1], name: endName } });
        }}
        renderInput={(startProps, endProps) => (
          <Base>
            <TextField
              {...startProps}
              fullWidth
              error={error}
              required={required}
              name={startName}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <Icon color={error ? "error" : "primary"} />
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              {...endProps}
              fullWidth
              error={error}
              required={required}
              name={endName}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <Icon color={error ? "error" : "primary"} />
                  </InputAdornment>
                ),
              }}
            />
          </Base>
        )}
      />
      {helperText!.length > 0 && (
        <FormHelperText error={error}>{helperText}</FormHelperText>
      )}
    </>
  );
};

DateRangeField.defaultProps = {
  helperText: "",
};

export default DateRangeField;
