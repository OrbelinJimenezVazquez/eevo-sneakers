import React from 'react';
import HeroSection from '../components/HeroSection';
import ProductCard from '../components/ProductCard';
import products from '../data/products.json';
import '/src/styles/Home.css';

export default function Home() {
  const featuredProducts = products.filter(prod => prod.featured);
  const newArrivals = products.slice(0, 6); 
  return (
    <div className="home-page">
      <h1>Bienvenido a Eevo Sneakers</h1>
      <section className="new-arrivals">
        <h2 className="section-title">Nuevas Llegadas</h2>
        <div className="products-grid">
          {newArrivals.map(product => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </section>
      <section className="featured-products">
        <h2 className="section-title">Los Más Vendidos</h2>
        <div className="products-grid">
          {featuredProducts.map(product => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </section>
      
    </div>
  );
}