import React from 'react';
import { lazy, Suspense } from 'react';
import ProductCard from '../components/products/ProductCard';  
import products from '../data/products/products.json';
import LoadingSpinner from '../components/ui/LoadingSpinner';
import '/src/styles/pages/Home.css';
import '/src/App.css';
import HeroSection from '../components/sections/HeroSection';
import SectionWrapper from '../components/ui/SectionWrapper';

// Componentes lazy-loaded para mejor performance
const BrandsCarousel = lazy(() => import('../components/products/BrandsCarousel'));
const SpecialOffer = lazy(() => import('../components/sections/SpecialOffer'));
const Testimonials = lazy(() => import('../components/sections/Testimonials'));
const StatsCounter = lazy(() => import('../components/sections/StatsCounter'));
const Newsletter = lazy(() => import('../components/sections/Newsletter'));
const InstagramFeed = lazy(() => import('../components/sections/InstagramFeed'))

export default function Home() {
  const featuredProducts = products.filter(prod => prod.feature);
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
    <SectionWrapper>
      <h1>Contenido de la sección</h1>
      <p>Este contenido estará envuelto en un contenedor consistente.</p>
    </SectionWrapper>
    </div>
    
  );
}