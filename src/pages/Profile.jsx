import { useDispatch } from 'react-redux';
import { Navigate, Link } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { removeUser } from '../store/slices/userSlice';
import { removeProduct } from '../store/slices/productSlice';
import React from 'react';
import Header from '../components/Header';
import Cart from '../components/Cart';

export default function Profile() {
  const dispatch = useDispatch();
  const { isAuth, email } = useAuth();
  const handleClick = () => {
    dispatch(removeUser());
    dispatch(removeProduct());
  };
  return (
    <div>
      <Header />
      {isAuth ? (
        <>
          <h1>Welcome!</h1>
          <button onClick={handleClick}>Log out from {email}</button>
        </>
      ) : (
        <Navigate to="/login" replace />
      )}

      <h1>Hello, dear costomer!</h1>
      <h2>Your purchases</h2>
      <p>No purchases!</p>
      <p> Find products from our collection!</p>
      <Link to="/products">See our products</Link>
      <Cart />
    </div>
  );
}
