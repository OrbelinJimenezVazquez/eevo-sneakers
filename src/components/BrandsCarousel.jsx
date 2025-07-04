import React, { useEffect, useRef } from 'react';
import '/src/styles/BrandsCarousel.css';

const brands = [
  { id: 1, name: 'Nike', logo: 'src/assets/images/brands/nike.png' },
  { id: 2, name: 'Adidas', logo: 'src/assets/images/brands/adidas.png' },
  { id: 3, name: 'Jordan', logo: 'src/assets/images/brands/jordan.webp' },
  { id: 4, name: 'Puma', logo: 'src/assets/images/brands/puma.png' },
  { id: 5, name: 'New Balance', logo: 'src/assets/images/brands/newbalance.png' },
  { id: 6, name: 'Reebok', logo: 'src/assets/images/brands/reebok.png' },
  { id: 7, name: 'Converse', logo: 'src/assets/images/brands/converse.png' },
  { id: 8, name: 'Vans', logo: 'src/assets/images/brands/vans.png' },
];

const BrandsCarousel = () => {
  return (
    <section className="brands-section">
      <div className="brands-container">
        <div className="brands-marquee">
          {/* Renderizamos los logos 3 veces para asegurar continuidad */}
          {[...brands, ...brands, ...brands].map((brand, index) => (
            <div key={`${brand.id}-${index}`} className="brand-item">
              <img 
                src={brand.logo} 
                alt={brand.name} 
                className="brand-logo"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandsCarousel;