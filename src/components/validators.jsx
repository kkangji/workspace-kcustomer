export const textFieldValidator = (isRequired) => (value) => {
  if (!isRequired && !value) {
    return true;
  }
  return !!value.trim() || 'ข้อมูลไม่ถูกต้อง';
};

export const numberValidator = (isRequired) => (value) => {
  if (!isRequired && !value) {
    return true;
  }
  return /^[0-9]/.test(value) || 'ข้อมูลไม่ถูกต้อง';
};

export const phoneNumberValidator = (isRequired) => (value) => {
  if (!isRequired && !value) {
    return true;
  }
  return /^[0-9]{3}-[0-9]{3}-[0-9]{4}$/.test(value) || 'ข้อมูลไม่ถูกต้อง'; //min 9, max 10 digits
};
