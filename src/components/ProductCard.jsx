import React, { useEffect, useState } from 'react';
import { Carousel } from '@trendyol-js/react-carousel';
import { getById } from '../services/product-api';
import { useParams, Link } from 'react-router-dom';
import { selectData, setProduct } from '../store/slices/productSlice';
import { useDispatch, useSelector } from 'react-redux';

export default function ProductCard() {
  const [productInfo, setProductInfo] = useState({});
  const { id } = useParams();
  const dispatch = useDispatch();
  const data = useSelector(selectData);

  useEffect(() => {
    getById(id).then((res) => setProductInfo(res));
  }, [id]);

  const handleClick = () => {
    dispatch(setProduct(productInfo));
  };
  console.log(data);
  return (
    <>
      {Object.keys(productInfo).length > 0 && (
        <div>
          <Carousel rightArrow="right" leftArrow="left">
            {productInfo.images?.map((el) => (
              <li key={productInfo.id}>
                <img src={el} alt={productInfo.category} />
              </li>
            ))}
          </Carousel>
          <h2>{productInfo.title}</h2>
          <p>{productInfo.description}</p>
          <span>{productInfo.price} $</span>
          <p>category: {productInfo.category}</p>
          <button onClick={handleClick}>Add to cart</button>
        </div>
      )}

      <Link to="/products">Go back </Link>
    </>
  );
}
