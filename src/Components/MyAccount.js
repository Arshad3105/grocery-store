import React, { useState } from 'react';
import axios from 'axios';

const MyAccount = () => {
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

  const styles = {
    container: {
      maxWidth: '900px',
      margin: '50px auto',
      padding: '30px',
      backgroundColor: theme.background,
      borderRadius: '15px',
      boxShadow: '0 8px 20px rgba(0,0,0,0.2)',
    },
    header: {
      textAlign: 'center',
      marginBottom: '30px',
      color: theme.primary,
    },
    profilePic: {
      width: '120px',
      height: '120px',
      objectFit: 'cover',
      borderRadius: '50%',
      border: `3px solid ${theme.primary}`,
      marginBottom: '20px',
    },
    label: {
      fontWeight: 'bold',
      color: theme.primaryDark,
    },
    input: {
      width: '100%',
      padding: '10px',
      borderRadius: '8px',
      border: '1px solid #ccc',
      outline: 'none',
      fontSize: '1rem',
    },
    btnSave: {
      backgroundColor: theme.primary,
      color: theme.text,
      border: 'none',
      padding: '12px 30px',
      borderRadius: '8px',
      fontSize: '1.1rem',
      cursor: 'pointer',
      transition: 'background-color 0.3s',
    },
    btnSaveHover: {
      backgroundColor: theme.primaryDark,
    },
    sectionTitle: {
      marginBottom: '15px',
      color: theme.accent,
      fontWeight: 'bold',
      fontSize: '1.5rem',
    },
  };

  const [formData, setFormData] = useState({
    fullName: 'John Doe',
    email: 'johndoe@example.com',
    phone: '+91 98765 43210',
    streetAddress: '123, Green Avenue',
    city: 'Bangalore',
    state: 'Karnataka',
    zipCode: '560001',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSave = async () => {
    try {
      await axios.post('http://localhost:7070/api/myaccount/save', formData);
      alert('Profile details saved!');
    } catch (error) {
      console.error(error);
      alert('Error saving profile.');
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.header}>My Account</h2>
      <div className="d-flex flex-column align-items-center mb-4">
        <img
          src="/images/user-placeholder.png"
          alt="Profile"
          style={styles.profilePic}
        />
        <h4 className="text-primary mb-2">{formData.fullName}</h4>
        <p className="text-secondary">{formData.email}</p>
      </div>

      <div>
        <h3 style={styles.sectionTitle}>Personal Details</h3>
        <div className="mb-3">
          <label style={styles.label}>Full Name</label>
          <input
            type="text"
            name="fullName"
            className="form-control"
            placeholder="Enter your full name"
            style={styles.input}
            value={formData.fullName}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label style={styles.label}>Email Address</label>
          <input
            type="email"
            name="email"
            className="form-control"
            placeholder="Enter your email"
            style={styles.input}
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label style={styles.label}>Phone Number</label>
          <input
            type="tel"
            name="phone"
            className="form-control"
            placeholder="Enter your phone number"
            style={styles.input}
            value={formData.phone}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="mt-4">
        <h3 style={styles.sectionTitle}>Address</h3>
        <div className="mb-3">
          <label style={styles.label}>Street Address</label>
          <input
            type="text"
            name="streetAddress"
            className="form-control"
            placeholder="Enter your street address"
            style={styles.input}
            value={formData.streetAddress}
            onChange={handleChange}
          />
        </div>
        <div className="row g-3">
          <div className="col-md-6">
            <label style={styles.label}>City</label>
            <input
              type="text"
              name="city"
              className="form-control"
              placeholder="City"
              style={styles.input}
              value={formData.city}
              onChange={handleChange}
            />
          </div>
          <div className="col-md-6">
            <label style={styles.label}>State</label>
            <input
              type="text"
              name="state"
              className="form-control"
              placeholder="State"
              style={styles.input}
              value={formData.state}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="mt-3">
          <label style={styles.label}>Zip Code</label>
          <input
            type="text"
            name="zipCode"
            className="form-control"
            placeholder="Zip Code"
            style={styles.input}
            value={formData.zipCode}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="d-flex justify-content-center mt-4">
        <button
          style={styles.btnSave}
          onMouseEnter={(e) =>
            (e.target.style.backgroundColor = styles.btnSaveHover.backgroundColor)
          }
          onMouseLeave={(e) =>
            (e.target.style.backgroundColor = styles.btnSave.backgroundColor)
          }
          onClick={handleSave}
        >
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default MyAccount;
