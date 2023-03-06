import React, { useEffect, useState, useMemo, useCallback } from 'react';
import { getAll } from '../services/product-api';
import ProductItem from './ProductItem';
import Filter from './Filter';
//import { setProduct } from '../store/slices/productSlice';

export default function ProductList() {
  const [products, setProducts] = useState([]);
  const [skip, setSkip] = useState(0);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    getAll(skip).then((res) => setProducts([...products, ...res]));
  }, [skip]);

  const getfilteredProducts = (data, curFilter = 'all') => {
    if (curFilter === 'all') {
      console.log(data, 'data');
      return data;
    } else if (curFilter === 'highest') {
      const newData = [...data];
      return newData.sort((a, b) => b.price - a.price);
    } else if (curFilter === 'lowest') {
      const newData = [...data];
      return newData.sort((a, b) => a.price - b.price);
    }
  };
  const filteredItems = useMemo(
    () => getfilteredProducts(products, filter),
    [filter, products]
  );
  const handleFilterUpdate = useCallback((newFilter) => {
    setFilter(newFilter);
  }, []);

  const loadMore = () => {
    setSkip((skip) => skip + 5);
  };
  console.log(filteredItems);
  return (
    <>
      <h1>Products</h1>
      {products.length > 0 && (
        <>
          <Filter curFilter={filter} updateFilter={handleFilterUpdate} />
          <ul>
            {filteredItems.map(({ title, price, images, id }) => (
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
        </>
      )}
      {skip < 5 && <button onClick={() => loadMore()}>See more</button>}
    </>
  );
}
