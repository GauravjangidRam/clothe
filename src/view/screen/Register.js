import React, { useState } from 'react';
import '../Register style/Register.css'; // Import CSS file for styling

const Register = () => {

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    phoneNumber: '',
    address: '',
    pincode: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can perform form validation and submission logic
    console.log(formData);
    // formData.map((e)=>{
    //   console.log(e)
    // })
    localStorage.setItem("username", formData.username)
    localStorage.setItem("email", formData.email)
    localStorage.setItem("pswd", formData.password)
    localStorage.setItem("PhoneNo.", formData.phoneNumber)
    localStorage.setItem("address.", formData.address)
    localStorage.setItem("pincode", formData.pincode)
    console.log(formData)
    window.location='/Login'
    alert('You Are Successfull Register')
    // Reset form fields
    setFormData({
      username: '',
      email: '',
      password: '',
      phoneNumber: '',
      address: '',
      pincode: ''

      
    });
   
  };

  
  return (
    <div className="registration-form-container">
      <h2>User Registration</h2>
      <form onSubmit={handleSubmit} className="registration-form">
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phoneNumber">Phone Number:</label>
          <input
            type="text"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="address">Address:</label>
          <textarea
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="pincode">Pincode:</label>
          <input
            type="text"
            id="pincode"
            name="pincode"
            value={formData.pincode}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="submit-btn" onClick={onclick}>Register</button>
      </form>
    </div>
  );
};

export default Register;
