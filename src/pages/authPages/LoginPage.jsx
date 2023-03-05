import React from 'react';
import { Link } from 'react-router-dom';
import Login from '../../components/Login';

export default function LoginPage() {
  return (
    <div>
      <h1>Login</h1>
      <Login />
      <p>
        Don't have an account? <Link to="/signup"> Sign up</Link>
      </p>
    </div>
  );
}
