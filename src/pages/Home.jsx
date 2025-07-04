import React from 'react';
import { lazy, Suspense } from 'react';
import ProductCard from '../components/ProductCard';  
import products from '../data/products.json';
import LoadingSpinner from '../components/LoadingSpinner';
import '/src/styles/Home.css';
import '/src/App.css';
import HeroSection from '../components/HeroSection';

// Componentes lazy-loaded para mejor performance
const BrandsCarousel = lazy(() => import('../components/BrandsCarousel'));
const SpecialOffer = lazy(() => import('../components/SpecialOffer'));
const Testimonials = lazy(() => import('../components/Testimonials'));
const StatsCounter = lazy(() => import('../components/StatsCounter'));
const Newsletter = lazy(() => import('../components/Newsletter'));
const InstagramFeed = lazy(() => import('../components/InstagramFeed'))

export default function Home() {
  const featuredProducts = products.filter(prod => prod.featured);
  const newArrivals = products.slice(0, 6);

  return (
    <div className="home">
      <HeroSection />
      <Suspense fallback={<LoadingSpinner />}>
        <BrandsCarousel />
        <StatsCounter />
      </Suspense>
      <section className="new-arrivals">
        <h2 className="section-title">Nuevas Llegadas</h2>
        <div className="products-grid">
          {newArrivals.map(product => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </section>
      <Suspense fallback={<LoadingSpinner />}>
        <SpecialOffer />
      </Suspense>
      <section className="featured-products">
        <h2 className="section-title">Los Más Vendidos</h2>
        <div className="products-grid">
          {featuredProducts.map(product => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </section>
      <Suspense fallback={<LoadingSpinner />}>
        <Testimonials />
        <InstagramFeed/>
        <Newsletter />
      </Suspense>
    </div>
  );
}