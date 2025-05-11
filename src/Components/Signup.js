import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css/animate.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { useNavigate } from 'react-router-dom';

const theme = {
  primary: '#2e7d32',
  primaryLight: '#388e3c',
  primaryDark: '#1b5e20',
  secondary: '#b2ff59',
  accent: '#00c853',
  background: '#e8f5e9',
  text: '#ffffff',
  textSecondary: 'rgba(255, 255, 255, 0.7)',
};

const Signup = () => {
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.fullName.value.trim();
    const email = form.email.value.trim();
    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;

    if (password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    try {
      const response = await fetch('http://localhost:7070/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await response.text();

      if (data === 'Signup successful') {
        alert('Signup successful!');
        navigate('/login');
      } else {
        alert(data);
      }
    } catch (error) {
      console.error('Signup error:', error);
      alert('Server error. Please try again later.');
    }
  };

  return (
    <div
      className="d-flex align-items-center justify-content-center vh-100"
      style={{
        background: `linear-gradient(to bottom right, ${theme.primary}, ${theme.primaryLight})`,
      }}
    >
      <div
        className="card p-4 shadow-lg animate__animated animate__fadeInUp"
        style={{ width: '100%', maxWidth: '400px', borderRadius: '20px' }}
      >
        <div className="text-center mb-4">
          <img
            src="/images/logo.png"
            alt="Logo"
            height="60"
            className="mb-3 animate__animated animate__rotateIn"
          />
          <h3 className="fw-bold text-success">Create Your Account</h3>
          <p className="text-muted">Join GroceryStore to start shopping fresh!</p>
        </div>

        <form onSubmit={handleSignup}>
          <div className="mb-3">
            <label className="form-label">Full Name</label>
            <input
              type="text"
              name="fullName"
              className="form-control"
              required
              placeholder="Enter your full name"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Email address</label>
            <input
              type="email"
              name="email"
              className="form-control"
              required
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              name="password"
              className="form-control"
              required
              placeholder="Choose a password"
            />
          </div>
          <div className="mb-4">
            <label className="form-label">Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              className="form-control"
              required
              placeholder="Re-enter your password"
            />
          </div>
          <button type="submit" className="btn btn-success w-100">
            Sign Up
          </button>
        </form>

        <p className="text-center mt-3 text-muted">
          Already have an account?{' '}
          <span
            className="text-success hover-underline"
            role="button"
            onClick={() => navigate('/login')}
          >
            Log in
          </span>
        </p>
      </div>

      <style>
        {`
          .hover-underline:hover {
            text-decoration: underline;
          }

          .form-control {
            border-radius: 10px;
          }

          .btn-success {
            background-color: ${theme.accent};
            border-color: ${theme.accent};
          }

          .btn-success:hover {
            background-color: ${theme.primary};
            border-color: ${theme.primary};
          }
        `}
      </style>
    </div>
  );
};

export default Signup;
