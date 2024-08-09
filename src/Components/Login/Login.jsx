import React, { useState } from 'react';
import './Login.css';
import { Link, useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../Firebase'; // Make sure the path to your firebase.js file is correct

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/'); // Redirect to the home page or another protected route after successful login
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div id='main-2'>
      <Link to="/"> 
        <span className="material-symbols-outlined h-6">arrow_circle_left</span>
      </Link>
      <div id='login-img'>
        <img src="https://cdn.dribbble.com/users/3951514/screenshots/7288432/media/866b49d81c982fdecd5a22de44c5e677.gif" alt="login" />
      </div>
      <div>
        <div className="signup-container">
          <form className="signup-form" onSubmit={handleLogin}>
            <h1 className='my-2 text-[20px] font-bold'>Login</h1>
            {error && <p>{error}</p>}
            <div>
              <label>Email:</label>
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </div>
            <div>
              <label>Password:</label>
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
            </div>
            <button type="submit" id='login-btn'>Login</button>
            <button id='login-btn'>Sign in with Google</button>
          </form>
        </div>
      </div>
    </div>
  );
}
