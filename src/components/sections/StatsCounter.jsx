// Componente StatsCounter.jsx
import React, { useState, useEffect } from 'react';
import '/src/styles/sections/StatsCounter.css';

const StatsCounter = () => {
  const [clients, setClients] = useState(0);
  const [products, setProducts] = useState(0);
  const [reviews, setReviews] = useState(0);

  useEffect(() => {
    const animateCounters = () => {
      const duration = 2000; // 2 segundos
      const startValue = 0;
      const clientEndValue = 12500;
      const productEndValue = 8500;
      const reviewEndValue = 4300;
      const increment = Math.max(
        clientEndValue / (duration / 16),
        productEndValue / (duration / 16),
        reviewEndValue / (duration / 16)
      );

      let startTime = null;
      
      const animation = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const progress = timestamp - startTime;
        const percentage = Math.min(progress / duration, 1);
        
        setClients(Math.floor(percentage * clientEndValue));
        setProducts(Math.floor(percentage * productEndValue));
        setReviews(Math.floor(percentage * reviewEndValue));
        
        if (progress < duration) {
          window.requestAnimationFrame(animation);
        }
      };
      
      window.requestAnimationFrame(animation);
    };

    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        animateCounters();
        observer.disconnect();
      }
    }, { threshold: 0.5 });

    observer.observe(document.querySelector('.stats-section'));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="stats-section">
      <div className="stats-container">
        <div className="stat-item">
          <span className="stat-number">{clients.toLocaleString()}+</span>
          <span className="stat-label">Clientes Satisfechos</span>
        </div>
        <div className="stat-item">
          <span className="stat-number">{products.toLocaleString()}+</span>
          <span className="stat-label">Pares Vendidos</span>
        </div>
        <div className="stat-item">
          <span className="stat-number">{reviews.toLocaleString()}+</span>
          <span className="stat-label">Reseñas 5 Estrellas</span>
        </div>
      </div>
    </section>
  );
};

export default StatsCounter;