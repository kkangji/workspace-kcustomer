import InputForm from '@/components/common/InputForm';
import NumberForm from '@/components/common/NumberForm';

export default function KsCustomerForm({ control }) {
  return (
    <>
      <div className="container">
        <NumberForm
          control={control}
          name="customer_code"
          label="Customer Code"
        />
        {/* </div>
      <div className="container"> */}
        <InputForm control={control} name="name" label="Name" />
        {/* </div>
      <div className="container"> */}
        <InputForm control={control} name="surname" label="Surname" />
        {/* </div>
      <div className="container"> */}
        <NumberForm
          control={control}
          name="tel_no"
          label="Tel No."
          phoneNumber
        />
        {/* </div>
      <div className="container"> */}
        <InputForm
          control={control}
          name="citizen_id"
          label="Citizen ID / Passport No."
        />
      </div>
    </>
  );
}
