import React from 'react';
import { useForm } from 'react-hook-form';

import KsCustomerView from '@/pages/check-kscustomer/container/KsCustomerView';
import KsCustomerForm from '@/pages/check-kscustomer/container/KsCustomerForm';

const defaultValues = {
  code: '',
  firstName: '',
  lastName: '',
};
export default function KsCustomerContainer() {
  const { handleSubmit, control } = useForm({
    defaultValues,
  });

  const onSubmit = (data) => console.log('data', data);

  return (
    <React.Fragment>
      <form onSubmit={handleSubmit(onSubmit)} className="form">
        <KsCustomerForm control={control} />
      </form>
      <KsCustomerView />
    </React.Fragment>
  );
}
