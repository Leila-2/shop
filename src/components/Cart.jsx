import { selectData } from '../store/slices/productSlice';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import React from 'react';
import ProductItem from './ProductItem';

export default function Cart() {
  const savedProducts = useSelector(selectData);
  return (
    <div>
      {savedProducts.length > 0 ? (
        <ul>
          {savedProducts.map(({ title, price, images, id, quantity }) => (
            <li key={id}>
              <ProductItem
                id={id}
                title={title}
                price={price}
                image={images[0]}
              />
              <span>Quantity: {quantity}</span>
            </li>
          ))}
        </ul>
      ) : (
        <>
          <p>No purchases!</p>
          <p> Find products from our collection!</p>
          <Link to="/products">See our products</Link>
        </>
      )}
    </div>
  );
}
