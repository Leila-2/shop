import React from 'react';
import { Link } from 'react-router-dom';
export default function ProductItem({ title, price, image, id }) {
  return (
    <>
      <Link to={`/products/${id}`}>
        <img src={image} alt={title} />
        <p>{title}</p>
        <span>{price}</span>
      </Link>
    </>
  );
}
