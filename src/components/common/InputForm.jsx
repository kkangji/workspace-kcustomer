import { Controller } from 'react-hook-form';
import TextField from '@mui/material/TextField';
import { textFieldValidator } from '@/components/validators';

const InputForm = ({
  disableErrorSpace,
  maxLength = 50,
  required,
  control,
  name,
  label,
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
        helperText={error?.message || (disableErrorSpace ? '' : ' ')}
        inputProps={{ maxLength }}
        fullWidth
        sx={{
          ...sx,
        }}
      />
    )}
    name={name}
    control={control}
    rules={{
      validate: textFieldValidator(required),
      required: required ? 'ข้อมูลไม่ถูกต้อง' : '',
    }}
  />
);

export default InputForm;
