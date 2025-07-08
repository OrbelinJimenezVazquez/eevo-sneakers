import React from 'react';
import { Link } from 'react-router-dom';
import '/src/styles/components/layout/category.css';

const CategoryLayout = ({ children, title }) => {
  return (
    <div className="category-page">
      <nav className="breadcrumb">
        <Link to="/">Inicio</Link> &gt; {title}
      </nav>
      
      <div className="category-header">
        <h1>{title}</h1>
      </div>
      
      <div className="category-container">
        <aside className="category-filters">
          {/* Filtros comunes a todas las categorías */}
        </aside>
        
        <section className="category-products">
          {children}
        </section>
      </div>
    </div>
  );
};

export default CategoryLayout;