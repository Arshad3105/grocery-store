import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import ReCAPTCHA from 'react-google-recaptcha';

const RECAPTCHA_SITE_KEY = '6Le9QDUrAAAAAIcrGRs806jZtC9l240g6By_kso-'; // Replace with your actual site key

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [loading, setLoading] = useState(false);
  const [captchaValue, setCaptchaValue] = useState(null);

  useEffect(() => {
    const savedEmail = localStorage.getItem('rememberedEmail');
    if (savedEmail) {
      setEmail(savedEmail);
      setRememberMe(true);
    }
  }, []);

  useEffect(() => {
    if (rememberMe) {
      localStorage.setItem('rememberedEmail', email);
    } else {
      localStorage.removeItem('rememberedEmail');
    }
  }, [rememberMe, email]);

  const handleCaptchaChange = (value) => {
    setCaptchaValue(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (!email || !password) {
      setError('Please fill in all fields.');
      return;
    }

    if (!captchaValue) {
      setError('Please complete the CAPTCHA.');
      return;
    }

    setLoading(true);
    try {
      const response = await fetch('http://localhost:7070/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password, captcha: captchaValue }),
      });

      const data = await response.text();

      if (response.ok && data === 'Login successful') {
        setSuccess(data);
        setTimeout(() => navigate('/dashboard'), 1500);
      } else {
        setError(data || 'Invalid email or password.');
      }
    } catch (err) {
      console.error(err);
      setError('Server error. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  const styles = {
    page: {
      background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      padding: '1rem',
    },
    backgroundImage: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      opacity: 0.3,
      zIndex: 0,
    },
    card: {
      backgroundColor: 'rgba(255,255,255,0.95)',
      borderRadius: '20px',
      padding: '2rem',
      maxWidth: '400px',
      width: '100%',
      boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
      border: '1px solid rgba(255,255,255,0.3)',
      zIndex: 1,
      position: 'relative',
    },
    logo: {
      textAlign: 'center',
      marginBottom: '2rem',
    },
    logoImage: {
      width: '80px',
      height: '80px',
    },
    heading: {
      color: '#4caf50',
      margin: '1rem 0',
    },
    label: {
      display: 'block',
      marginBottom: '5px',
      fontWeight: 600,
      color: '#555',
    },
    input: {
      width: '100%',
      padding: '12px',
      fontSize: '1rem',
      marginBottom: '1.5rem',
      borderRadius: '8px',
      border: '1px solid #ddd',
    },
    passwordContainer: {
      display: 'flex',
      gap: '5px',
      alignItems: 'center',
    },
    showButton: {
      padding: '10px 12px',
      borderRadius: '8px',
      border: '1px solid #ddd',
      backgroundColor: '#eee',
      cursor: 'pointer',
      fontSize: '0.9rem',
    },
    rememberMe: {
      display: 'flex',
      alignItems: 'center',
      marginTop: '1rem',
      color: '#555',
    },
    rememberMeLabel: {
      marginLeft: '0.5rem',
    },
    button: {
      backgroundColor: '#4caf50',
      color: 'white',
      border: 'none',
      padding: '12px',
      width: '100%',
      borderRadius: '8px',
      fontSize: '1rem',
      cursor: 'pointer',
      transition: 'background-color 0.3s, transform 0.3s',
      marginTop: '1rem',
    },
    buttonHover: {
      backgroundColor: '#45a049',
      transform: 'scale(1.05)',
    },
    buttonDisabled: {
      opacity: 0.6,
      cursor: 'not-allowed',
    },
    link: {
      textAlign: 'right',
      marginTop: '0.5rem',
      color: '#4caf50',
      textDecoration: 'none',
    },
    backHome: {
      textAlign: 'center',
      marginTop: '1.5rem',
    },
    alert: {
      padding: '10px',
      marginBottom: '1rem',
      borderRadius: '5px',
      fontSize: '0.9rem',
    },
    error: {
      backgroundColor: '#f8d7da',
      color: '#721c24',
    },
    success: {
      backgroundColor: '#d4edda',
      color: '#155724',
    },
    captchaContainer: {
      marginTop: '1rem',
      marginBottom: '1rem',
      display: 'flex',
      justifyContent: 'center',
    },
  };

  return (
    <div style={styles.page}>
      <img
        src="https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
        alt="Grocery Background"
        style={styles.backgroundImage}
      />
      <div style={styles.card}>
        <div style={styles.logo}>
          <img
            src="https://cdn-icons-png.flaticon.com/512/3144/3144456.png"
            alt="Grocery Logo"
            style={styles.logoImage}
          />
          <h2 style={styles.heading}>Grocery Login</h2>
        </div>

        <form onSubmit={handleSubmit}>
          {error && <div style={{ ...styles.alert, ...styles.error }}>{error}</div>}
          {success && <div style={{ ...styles.alert, ...styles.success }}>{success}</div>}

          <label htmlFor="email" style={styles.label}>Email address</label>
          <input
            type="email"
            id="email"
            style={styles.input}
            placeholder="Enter your email"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
          />

          <label htmlFor="password" style={styles.label}>Password</label>
          <div style={styles.passwordContainer}>
            <input
              type={showPassword ? 'text' : 'password'}
              id="password"
              style={styles.input}
              placeholder="Enter your password"
              value={password}
              required
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              style={styles.showButton}
            >
              {showPassword ? 'Hide' : 'Show'}
            </button>
          </div>

          <div style={styles.rememberMe}>
            <input
              type="checkbox"
              id="rememberMe"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
            />
            <label htmlFor="rememberMe" style={styles.rememberMeLabel}>Remember Me</label>
          </div>

          <div style={styles.captchaContainer}>
            <ReCAPTCHA sitekey={RECAPTCHA_SITE_KEY} onChange={handleCaptchaChange} />
          </div>

          <button
            type="submit"
            style={{
              ...styles.button,
              ...(loading ? styles.buttonDisabled : {}),
            }}
            disabled={loading}
            onMouseOver={(e) =>
              !loading && Object.assign(e.target.style, styles.buttonHover)
            }
            onMouseOut={(e) =>
              !loading &&
              Object.assign(e.target.style, {
                backgroundColor: '#4caf50',
                transform: 'scale(1)',
              })
            }
          >
            {loading ? 'Logging in...' : 'Login'}
          </button>

          <div style={styles.link}>
            <Link to="/forgot-password" style={styles.link}>
              Forgot Password?
            </Link>
          </div>
        </form>

        <div style={styles.backHome}>
          <Link to="/" style={styles.link}>
            ⬅ Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
