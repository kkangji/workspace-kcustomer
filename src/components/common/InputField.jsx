import { Controller } from 'react-hook-form';
// import TextFieldProps from '@mui/material/TextFieldProps';
import TextField from '@mui/material/TextField';
// import { TextField, TextFieldProps } from "@mui/material";
import { textFieldValidator } from '@/components/validators';

// type Props<T extends FieldValues> = Omit<TextFieldProps, "name"> & {
//   control: Control<T, object>;
//   disableErrorSpace?: boolean;
//   name: Path<T>;
//   maxLength?: number;
// };

const InputField = ({
  control,
  disableErrorSpace,
  name,
  required,
  label,
  maxLength = 50,
  sx,
  ...restProps
}) => (
  <Controller
    render={({ field: { ref, ...restField }, fieldState: { error } }) => (
      <TextField
        {...restField}
        {...restProps}
        inputRef={ref}
        error={!!error}
        label={`${label ? `${label}${required ? '*' : ''}` : ''}`}
        //" " Space reserves space under for error message
        helperText={error?.message || (disableErrorSpace ? '' : ' ')}
        inputProps={{ maxLength }}
        fullWidth
        sx={{
          width: '25ch',
          ...sx,
        }}
      />
    )}
    name={name}
    control={control}
    rules={{
      validate: textFieldValidator(required),
      required: required ? 'Required' : '',
    }}
  />
);

export default InputField;
