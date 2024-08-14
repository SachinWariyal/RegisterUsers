export const validateUsername = (username) => {
  return username.length >= 3;
};

export const validateFirstname = (firstname) => {
  return firstname.length >= 1;
};

export const validateLastname = (lastname) => {
  return lastname.length >= 1;
};

export const validatePassword = (password) => {
  return password.length >= 6;
};

export const validateConfirmPassword = (password, confirmPassword) => {
  return password === confirmPassword;
};

export const validateEmail = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
};

export const validateMobileNumber = (number) => {
  const re = /^[0-9]{10}$/;
  return re.test(String(number));
};

export const validateAddress = (address) => {
  return address.length > 0;
};
