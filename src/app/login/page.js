'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from './login.module.css';

export default function LoginPage() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    // Check for admin credentials
    if (formData.email === 'admin@mail.com' && formData.password === 'rahasia') {
      try {
        // Simulate successful login
        await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate API call
        
        // Set login status
        localStorage.setItem('isLoggedIn', 'true');
        
        // Redirect to dashboard
        router.push('/dashboard');
    } catch (err) {
        setError('An error occurred during login');
    }
    } else {
      setError('Invalid email or password');
    }
    
    setLoading(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className={styles.loginContainer}>
      <div className={styles.loginBox}>
        <h1 className={styles.title}>Login</h1>
        <p className={styles.subtitle}>Welcome back! Please login to your account.</p>
        
        {error && <div className={styles.error}>{error}</div>}
        
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.inputGroup}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Enter your email"
              className={styles.input}
            />
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              placeholder="Enter your password"
              className={styles.input}
            />
          </div>

          <button 
            type="submit" 
            className={styles.loginButton}
            disabled={loading}
          >
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </form>

        <p className={styles.registerText}>
          Don't have an account?{' '}
          <a href="/register" className={styles.registerLink}>
            Register here
          </a>
        </p>
      </div>
    </div>
  );
}