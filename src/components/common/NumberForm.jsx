// import React from 'react';
import { Controller } from 'react-hook-form';
import NumberFormat from 'react-number-format';
import TextField from '@mui/material/TextField';
import { numberValidator, phoneNumberValidator } from '@/components/validators';

const NumberForm = ({
  disableErrorSpace,
  phoneNumber,
  required,
  control,
  name,
  label,
  sx,
  ...restProps
}) => {
  // const format = (value) =>
  //   value
  //     .replace(/\s+/g, '')
  //     .replace(/([a-z0-9]{3})/gi, '$1 ')
  //     .trim();

  //min 9, max 10 digits
  const isAllowed = ({ value }) => value?.length <= 10;

  return (
    <Controller
      render={({ field: { ref, ...restField }, fieldState: { error } }) => (
        <NumberFormat
          {...restField}
          {...restProps}
          inputRef={ref}
          error={!!error}
          customInput={TextField}
          label={`${label ? `${label}${required ? '*' : ''}` : ''}`}
          helperText={error?.message || (disableErrorSpace ? '' : ' ')}
          allowNegative={false}
          mask="_"
          format={phoneNumber ? '###-###-####' : false}
          isAllowed={isAllowed}
          fullWidth
          sx={{
            ...sx,
          }}
        />
      )}
      name={name}
      control={control}
      rules={{
        required: required ? 'ข้อมูลไม่ถูกต้อง' : '',
        validate: phoneNumber
          ? phoneNumberValidator(required)
          : numberValidator(required),
      }}
    />
  );
};

export default NumberForm;
