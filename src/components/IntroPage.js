/// IntroPage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './IntroPage.css';

const IntroPage = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState({
    email: '',
    password: '',
  });
  const [errorMessage, setErrorMessage] = useState('');
  const [showPassword, setShowPassword] = useState(false); // Toggle password visibility
  const navigate = useNavigate();

  // Simulate users database
  const usersDatabase = [
    { email: 'user@example.com', password: 'password123' },
    { email: 'test@example.com', password: 'test1234' },
    { email: 'keerthi@gmail.com', password: 'password123' }, // Test user
    { email: 'fairy@gmail.com', password: 'fairy@123' },
  ];

  const validate = () => {
    let isValid = true;
    let newErrors = {};

    // Email validation
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
      isValid = false;
    }

    // Password validation
    if (!formData.password || formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      const user = usersDatabase.find(
        (u) => u.email === formData.email && u.password === formData.password
      );

      if (user) {
        localStorage.setItem('userEmail', formData.email);
        navigate('/home'); // Navigate to home on successful login
      } else {
        setErrorMessage('Incorrect email or password. Please try again.');
      }
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="intro-container">
      <div className="intro-content">
        <h1>Welcome Back</h1>
        <p>Please log in to continue</p>

        {errorMessage && <div className="error-message">{errorMessage}</div>}

        <form onSubmit={handleSubmit} className="login-form">
          <div className="input-group">
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className={`input ${errors.email ? 'error' : ''}`}
              required
            />
            {errors.email && <small className="error-text">{errors.email}</small>}
          </div>

          <div className="input-group">
            <input
              type={showPassword ? 'text' : 'password'}
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className={`input ${errors.password ? 'error' : ''}`}
              required
            />
            {errors.password && <small className="error-text">{errors.password}</small>}
          </div>

          <div className="show-password-container">
            <label>
              <input
                type="checkbox"
                checked={showPassword}
                onChange={togglePasswordVisibility}
                className="show-password-checkbox"
              />
              Show Password
            </label>
          </div>

          <button type="submit" className="login-button">Login</button>
        </form>

        <div className="links">
          <a href="#" className="forgot-password">Forgot Password?</a>
          <a href="#" className="CreateAccount" onClick={() => navigate('/createaccount')}>
            Create an Account
          </a>
        </div>
      </div>
    </div>
  );
};

export default IntroPage;


