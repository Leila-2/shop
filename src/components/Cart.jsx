import React from 'react';
import ProductItem from './ProductItem';

export default function Cart() {
  const savedProducts = JSON.parse(localStorage.getItem('item'));
  console.log(savedProducts, 'LS');
  return (
    <div>
      {savedProducts && (
        <ul>
          {savedProducts.map(({ title, price, images, id }) => (
            <li key={id}>
              <ProductItem
                id={id}
                title={title}
                price={price}
                image={images[0]}
              />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
