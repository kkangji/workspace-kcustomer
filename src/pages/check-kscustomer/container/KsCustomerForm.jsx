// import React from 'react';
// import Container from '@mui/material/Container';
// import { useForm } from 'react-hook-form';
import Button from '@/components/common/Buttons';
import InputField from '@/components/common/InputField';

export default function KsCustomerForm({ control }) {
  return (
    <>
      <div className="container">
        <InputField control={control} name="code" label="Code" required />
      </div>
      <div className="container">
        <InputField
          control={control}
          name="firstName"
          label="First Name"
          required
        />
      </div>
      <div className="container">
        <InputField
          control={control}
          name="lastName"
          label="Last Name"
          required
        />
      </div>
      <Button variant="contained" type="submit" text="Submit" />
    </>
  );
}
