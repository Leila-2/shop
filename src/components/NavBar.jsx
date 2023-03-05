import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

export default function NavBar() {
  const { isAuth } = useAuth();
  console.log(isAuth);
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/profile">Profile</Link>
        </li>
        <li>
          <Link to="/products">Products</Link>
        </li>
        {!isAuth && (
          <>
            <li>
              <Link to="/signup">Sign Up</Link>
            </li>
            <li>
              <Link to="/login">Log in</Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}
