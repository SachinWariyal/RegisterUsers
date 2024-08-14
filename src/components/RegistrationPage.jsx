import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import "./RegistrationPage.css";
import {
  validateUsername,
  validateFirstname,
  validateLastname,
  validatePassword,
  validateConfirmPassword,
  validateEmail,
  validateMobileNumber,
  validateAddress,
} from "../utils/validation";

import { getUsers, saveUsers } from "../utils/storage";

const RegistrationPage = () => {
  const [formData, setFormData] = useState({
    username: "",
    firstname: "",
    lastname: "",
    password: "",
    confirmPassword: "",
    mobileNumber: "",
    email: "",
    address: "",
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleLogin =  () => {
    navigate('/');  
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    let newErrors = {};

    if (!validateUsername(formData.username))
      newErrors.username = "Username must be at least 3 characters long";
    if (!validateFirstname(formData.firstname))
      newErrors.firstname = "Firstname cannot be empty";
    if (!validateLastname(formData.lastname))
      newErrors.lastname = "Lastname cannot be empty";
    if (!validateEmail(formData.email))
      newErrors.email = "Invalid email address";
    if (!validatePassword(formData.password))
      newErrors.password = "Password must be at least 6 characters long";
    if (!validateConfirmPassword(formData.password, formData.confirmPassword))
      newErrors.confirmPassword = "Passwords do not match";
    if (!validateMobileNumber(formData.mobileNumber))
      newErrors.mobileNumber = "Mobile number must be 10 digits";
    if (!validateAddress(formData.address))
      newErrors.address = "Address cannot be empty";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    const users = getUsers();
    users.push({ ...formData });
    saveUsers(users);

    alert("Registration successful!");
    setFormData({
      username: "",
      firstname: "",
      lastname: "",
      password: "",
      confirmPassword: "",
      mobileNumber: "",
      email: "",
      address: "",
    });
  };
  return (
    <>
      <h1>Registration Page</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            name="username"
            placeholder="Username"
            onChange={handleChange}
            value={formData.username}
            required
          />
          {errors.username && <p>{errors.username}</p>}
        </div>

        <div>
          <input
            type="text"
            name="firstname"
            placeholder="First Name"
            onChange={handleChange}
            value={formData.firstname}
            required
          />
          {errors.firstname && <p>{errors.firstname}</p>}
        </div>

        <div>
          <input
            type="text"
            name="lastname"
            placeholder="Last Name"
            onChange={handleChange}
            value={formData.lastname}
            required
          />
          {errors.lastname && <p>{errors.lastname}</p>}
        </div>

        <div>
          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            value={formData.email}
            required
          />
          {errors.email && <p>{errors.email}</p>}
        </div>

        <div>
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            value={formData.password}
            required
          />
          {errors.password && <p>{errors.password}</p>}
        </div>

        <div>
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            onChange={handleChange}
            value={formData.confirmPassword}
            required
          />
          {errors.confirmPassword && <p>{errors.confirmPassword}</p>}
        </div>

        <div>
          <input
            type="text"
            name="mobileNumber"
            placeholder="Mobile Number"
            onChange={handleChange}
            value={formData.mobileNumber}
            required
          />
          {errors.mobileNumber && <p>{errors.mobileNumber}</p>}
        </div>

        <div>
          <input
            type="text"
            name="address"
            placeholder="Address"
            onChange={handleChange}
            value={formData.address}
            required
          />
          {errors.address && <p>{errors.address}</p>}
        </div>

        <button className='button' type="submit">Register</button>
        <button className='button' onClick={handleLogin}>Login</button>
      </form>
    </>
  );
};

export default RegistrationPage;
