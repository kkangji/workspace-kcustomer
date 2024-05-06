import React from 'react';
import { Helmet } from 'react-helmet-async';
import KsCustomerContainer from '@/pages/check-kscustomer/container';

const CheckKsCustomer = () => {
  return (
    <React.Fragment>
      <Helmet>
        <title> Ks Customer </title>
      </Helmet>
      <KsCustomerContainer />
    </React.Fragment>
  );
};

export default CheckKsCustomer;
