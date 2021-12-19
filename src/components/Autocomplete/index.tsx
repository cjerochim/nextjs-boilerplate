import {
  Autocomplete as MUIAutocomplete,
  CircularProgress,
  createFilterOptions,
  TextField,
  FormHelperText,
} from "@mui/material";

export interface AutocompleteItem {
  key: string;
  value: string;
}

interface AutocompleteProps {
  multiple?: boolean;
  id: string;
  name: string;
  label: string;
  loading?: boolean;
  error?: boolean;
  required?: boolean;
  helperText?: string;
  value: AutocompleteItem[] | AutocompleteItem;
  options?: AutocompleteItem[];
  onInputChange?: (value: string) => void;
  onChange?: (event: any) => void;
}

// option: AutocompleteItem[] | AutocompleteItem

const filter = createFilterOptions<AutocompleteItem>();

const toLabel = (item: AutocompleteItem): string => item.key;
const toMatch = (option: AutocompleteItem, value: AutocompleteItem): boolean =>
  option.value.toLowerCase() === value.value.toLowerCase();

const Autocomplete = ({
  multiple,
  id,
  label,
  loading,
  value,
  options,
  error,
  required,
  name,
  onInputChange,
  onChange,
  helperText,
}: AutocompleteProps) => {
  return (
    <>
      <MUIAutocomplete
        id={id}
        multiple={multiple}
        freeSolo
        loading={loading}
        selectOnFocus
        clearOnBlur
        value={value}
        options={options!}
        getOptionLabel={toLabel}
        isOptionEqualToValue={toMatch}
        filterOptions={(items, params) => {
          // Enable the user to add their own (Consider make this a configurable item)
          const filtered = filter(items, params);
          const { inputValue } = params;
          const isExisting = items.some((v) => inputValue === v.key);
          if (inputValue !== "" && !isExisting) {
            filtered.push({
              key: inputValue,
              value: inputValue.toLowerCase(),
            });
          }
          return filtered;
        }}
        onInputChange={(e: any) => {
          // TODO - Investigate further the exact event type
          if (typeof onInputChange === "undefined") return;
          onInputChange(e?.target?.value ?? "");
        }}
        onChange={(e: any, value: any) => {
          // TODO - Investigate event type, and why unable to define Autocomplete as value
          if (typeof onChange === "undefined") return;
          // fake native change event for Fomik
          onChange({ target: { value, name } });
        }}
        renderInput={(params) => (
          <TextField
            {...params}
            label={label}
            error={error}
            required={required}
            name={name}
            InputProps={{
              ...params.InputProps,
              endAdornment: (
                <>
                  {loading && (
                    <CircularProgress
                      sx={{ mr: 1 }}
                      color="primary"
                      size={20}
                    />
                  )}
                </>
              ),
            }}
          />
        )}
      />
      {helperText!.length > 0 && (
        <FormHelperText error={error}>{helperText}</FormHelperText>
      )}
    </>
  );
};

Autocomplete.defaultProps = {
  options: [],
  helperText: "",
};

export default Autocomplete;
