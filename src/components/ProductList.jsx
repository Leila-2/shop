import React, { useEffect, useState } from 'react';
import { getAll } from '../services/product-api';
import ProductItem from './ProductItem';

export default function ProductList() {
  const [products, setProducts] = useState([]);
  const [skip, setSkip] = useState(0);
  useEffect(() => {
    getAll(skip).then((res) => setProducts([...products, ...res]));
  }, [skip]);

  const loadMore = () => {
    setSkip((skip) => skip + 5);
  };

  return (
    <>
      <h1>Products</h1>
      {products && (
        <ul>
          {products.map(({ title, price, images, id }) => (
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
      {skip < 5 && <button onClick={() => loadMore()}>See more</button>}
    </>
  );
}
