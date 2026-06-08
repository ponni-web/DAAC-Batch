import { useState } from 'react';
import './App.css';
import Dashboard from './component/Dashboard';

function App() {
  const [view, setView] = useState('login');
  const [loginData, setLoginData] = useState({ email: '', password: '' });
  const [signupData, setSignupData] = useState({ name: '', email: '', password: '', confirmPassword: '' });
  const [message, setMessage] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLoginChange = (event) => {
    const { name, value } = event.target;
    setLoginData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSignupChange = (event) => {
    const { name, value } = event.target;
    setSignupData((prev) => ({ ...prev, [name]: value }));
  };

  const handleLoginSubmit = (event) => {
    event.preventDefault();
    setMessage(`Login submitted for ${loginData.email}`);
    console.log('Login data', loginData);
    // mark as authenticated (placeholder for real auth)
    setIsAuthenticated(true);
  };

  const handleSignupSubmit = (event) => {
    event.preventDefault();
    if (signupData.password !== signupData.confirmPassword) {
      setMessage('Passwords do not match.');
      return;
    }
    setMessage(`Signup submitted for ${signupData.email}`);
    console.log('Signup data', signupData);
    // optionally auto-login after signup
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setLoginData({ email: '', password: '' });
    setView('login');
    setMessage('');
  };

  if (isAuthenticated) {
    return <Dashboard userEmail={loginData.email || signupData.email} onLogout={handleLogout} />;
  }

  return (
    <div className="App">
      <div className="page-grid">
        <div className="info-panel">
          <div className="info-badge">KMHR IT Center</div>
          <h1>KMHR Login Portal</h1>
          <p>Sign in with your KMHR training account to access the dashboard, batches, and internship details.</p>
          <div className="timeline">
            <div className="timeline-item">
              <h3>Step 1</h3>
              <p>Enter your KMHR email and password on the right.</p>
            </div>
            <div className="timeline-item">
              <h3>Step 2</h3>
              <p>After login, you’ll enter the KMHR training dashboard.</p>
            </div>
          </div>
        </div>

        <div className="auth-card">
          <div className="auth-header">
            <h1>{view === 'login' ? 'KMHR Login' : 'KMHR Sign Up'}</h1>
            <p>{view === 'login' ? 'Sign in with your KMHR training credentials.' : 'Create your KMHR training account.'}</p>
          </div>

          <div className="toggle-buttons">
            <button
              type="button"
              className={view === 'login' ? 'active' : ''}
              onClick={() => {
                setView('login');
                setMessage('');
              }}
            >
              KMHR Login
            </button>
            <button
              type="button"
              className={view === 'signup' ? 'active' : ''}
              onClick={() => {
                setView('signup');
                setMessage('');
              }}
            >
              KMHR Sign Up
            </button>
          </div>

          {view === 'login' ? (
            <form className="auth-form" onSubmit={handleLoginSubmit}>
              <div className="field-row">
                <label className="field-label" htmlFor="login-email">Email</label>
                <input
                  id="login-email"
                  type="email"
                  name="email"
                  value={loginData.email}
                  onChange={handleLoginChange}
                  placeholder="you@example.com"
                  required
                />
              </div>
              <div className="field-row">
                <label className="field-label" htmlFor="login-password">Password</label>
                <input
                  id="login-password"
                  type="password"
                  name="password"
                  value={loginData.password}
                  onChange={handleLoginChange}
                  placeholder="Enter your password"
                  required
                />
              </div>
              <button className="submit-button" type="submit">Login</button>
            </form>
          ) : (
            <form className="auth-form" onSubmit={handleSignupSubmit}>
              <div className="field-row">
                <label className="field-label" htmlFor="signup-name">Full Name</label>
                <input
                  id="signup-name"
                  type="text"
                  name="name"
                  value={signupData.name}
                  onChange={handleSignupChange}
                  placeholder="Your full name"
                  required
                />
              </div>
              <div className="field-row">
                <label className="field-label" htmlFor="signup-email">Email</label>
                <input
                  id="signup-email"
                  type="email"
                  name="email"
                  value={signupData.email}
                  onChange={handleSignupChange}
                  placeholder="you@example.com"
                  required
                />
              </div>
              <div className="field-row">
                <label className="field-label" htmlFor="signup-password">Password</label>
                <input
                  id="signup-password"
                  type="password"
                  name="password"
                  value={signupData.password}
                  onChange={handleSignupChange}
                  placeholder="Create a password"
                  required
                />
              </div>
              <div className="field-row">
                <label className="field-label" htmlFor="signup-confirmPassword">Confirm Password</label>
                <input
                  id="signup-confirmPassword"
                  type="password"
                  name="confirmPassword"
                  value={signupData.confirmPassword}
                  onChange={handleSignupChange}
                  placeholder="Confirm your password"
                  required
                />
              </div>
              <button className="submit-button" type="submit">Sign Up</button>
            </form>
          )}

          {message && <div className="status-message">{message}</div>}
        </div>

        <div className="address-card">
          <h2>Office Address</h2>
          <p>123 Pink Street, Dream Town</p>
          <p>Phone: +91 98765 43210</p>
          <p>Email: hello@pinklane.com</p>
        </div>
      </div>
    </div>
  );
}

export default App;
