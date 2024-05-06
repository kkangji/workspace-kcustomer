export const textFieldValidator = (isRequired) => (value) => {
  if (!isRequired && !value) {
    return true;
  }
  // Check if not only spaces are entered
  return !!value.trim() || 'Required';
};
