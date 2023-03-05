import React from 'react';
import Header from '../components/Header';
import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <div>
      <Header />

      <h1>The new phones are here take a look.</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque in
        est dui, aliquam, tempor. Faucibus morbi turpis.
      </p>
      <Link to="/products">Explore</Link>
    </div>
  );
}
