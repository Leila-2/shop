import React from 'react';
import { Link } from 'react-router-dom';
import Signup from '../../components/Signup';

export default function SignupPage() {
  return (
    <div>
      <h1>Sign up</h1>
      <Signup />
      <p>
        Already have an account? <Link to="/login">Log in</Link>
      </p>
    </div>
  );
}
