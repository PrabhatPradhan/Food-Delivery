import React, { useState } from 'react';
import './Singup.css';
import { auth} from '../Firebase'
import { Link, useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword, signOut } from 'firebase/auth';

export default function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    try {
      // Create user account
      await createUserWithEmailAndPassword(auth, email, password);

      // Sign the user out immediately after account creation
      await signOut(auth);

      // Redirect to the login page
      navigate('/login');
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div id='main-2'>
      <Link to="/"> 
        <span className="material-symbols-outlined h-6">arrow_circle_left</span>
      </Link>
      <div id='signup-img'>
        <img src="https://cdn.dribbble.com/users/218750/screenshots/2781808/media/425902f177e4186d5891593b9592fcf4.gif" />
      </div>
      <div>
        <div className="signup-container">
          <h2 className='my-2 text-[20px] font-bold'>Register</h2>
          {error && <p>{error}</p>}
          <form className="signup-form" onSubmit={handleSignup}>
            <div>
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </div>
            <div>
              <label htmlFor="password">Password:</label>
              <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
            </div>
            {/* <div>
              <label htmlFor="confirmPassword">Confirm Password:</label>
              <input type="password" id="confirmPassword" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
            </div> */}
            <button type="submit" id='signup-btn'>Register</button>
          </form>
        </div>
      </div>
    </div>
  );
}
