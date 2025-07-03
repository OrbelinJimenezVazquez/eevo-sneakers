import React from 'react';
import HeroSection from '../components/HeroSection';
import ProductCard from '../components/ProductCard';
import products from '../data/products.json';
import '/src/styles/Home.css';

export default function Home() {
  return (
    <div>
      <h1>Bienvenido a Eevo Sneakers</h1>
      {products.slice(0, 2).map(prod => (
        <ProductCard key={prod.id} {...prod} />
      ))}
    </div>
  );
}