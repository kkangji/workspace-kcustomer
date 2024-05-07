import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
// import axios from 'axios';
import Button from '@/components/common/Buttons';
import KsCustomerView from '@/pages/check-kscustomer/container/KsCustomerView';
import KsCustomerForm from '@/pages/check-kscustomer/container/KsCustomerForm';

const defaultValues = {
  customer_code: '',
  name: '',
  surname: '',
  tel_no: '',
  citizen_id: '',
};

export default function KsCustomerContainer() {
  const { handleSubmit, control, reset } = useForm({
    defaultValues,
  });

  // const onSubmit = (data) => console.log('data', data);

  const [data, setData] = useState([]);

  const handleOnChange = async (value, id) => {
    // console.log('data', value);
    // const headers = {
    //   'Content-Type': 'application/json',
    // };
    // try {
    //   await axios.patch(
    //     `/${value?.customer_code}/`,
    //     // `/${id}/`,
    //     {
    //       fixed: !value,
    //     },
    //     { headers }
    //   );
    // } catch (error) {
    //   console.log(error);
    // }

    // const res = await axios.get(
    //   'https://604752c8b801a40017ccbe94.mockapi.io/crashes/'
    // );

    // setData(res.data);
    setData([
      {
        client_code: '0001',
        client_name: 'Dylan',
        marketing_name: 'Murray',
        marketing_id: '2929292929',
        address: '261 Erdman Ford',
        citizen_id: 'East Daphne',
        team: 'Kentucky',
      },
      {
        client_code: '0002',
        client_name: 'Dylan',
        marketing_name: 'Murray',
        marketing_id: '2929292929',
        address: '261 Erdman Ford',
        citizen_id: 'East Daphne',
        team: 'Kentucky',
      },
      {
        client_code: '000394232',
        client_name: 'Ervin',
        marketing_name: 'Murray',
        marketing_id: '2929292929',
        address: '261 Erdman Ford',
        citizen_id: 'East Daphne',
        team: 'Kentucky',
      },
      {
        client_code: '003232302',
        client_name: 'Brittany',
        marketing_name: 'Murray',
        marketing_id: '2929292929',
        address: '261 Erdman Ford',
        citizen_id: 'East Daphne',
        team: 'Kentucky',
      },
      {
        client_code: '0032323202',
        client_name: 'Dylan',
        marketing_name: 'Murray',
        marketing_id: '2929292929',
        address: '261 Erdman Ford',
        citizen_id: 'East Daphne',
        team: 'Kentucky',
      },
      {
        client_code: '0002',
        client_name: 'Raquel',
        marketing_name: 'Kohler',
        marketing_id: '2929292929',
        address: '261 Erdman Ford',
        citizen_id: 'East Daphne',
        team: 'Kentucky',
      },
      {
        client_code: '000394232',
        client_name: 'Dylan',
        marketing_name: 'Murray',
        marketing_id: '2929292929',
        address: '261 Erdman Ford',
        citizen_id: 'East Daphne',
        team: 'Kentucky',
      },
      {
        client_code: '003232302',
        client_name: 'Branson',
        marketing_name: 'Frami',
        marketing_id: '2929292929',
        address: '261 Erdman Ford',
        citizen_id: 'East Daphne',
        team: 'Kentucky',
      },
      {
        client_code: '0032323202',
        client_name: 'Raquel',
        marketing_name: 'Branson',
        marketing_id: '2929292929',
        address: '261 Erdman Ford',
        citizen_id: 'East Daphne',
        team: 'Kentucky',
      },
    ]);
  };

  return (
    <React.Fragment>
      <h1 className="h1">Customer</h1>
      <form onSubmit={handleSubmit(handleOnChange)} className="form">
        <KsCustomerForm control={control} />
        <div className="buttons">
          <Button
            variant="outlined"
            color="secondary"
            type="button"
            text="Reset"
            onClick={() => {
              reset({ ...defaultValues });
              setData([]);
            }}
          />
          <Button variant="contained" type="submit" text="Submit" />
        </div>
      </form>
      <KsCustomerView tableData={data} handleOnChange={handleOnChange} />
    </React.Fragment>
  );
}
