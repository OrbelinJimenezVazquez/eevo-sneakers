// components/ProductCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import '/src/styles/ProductCard.css';

const ProductCard = ({ id, name, price, image, category }) => {
  return (
    <div className="product-card">
      <Link to={`/product/${id}`} className="product-link">
        <div className="product-image-container">
          <img 
            src={image} 
            alt={name} 
            className="product-image"
            loading="lazy"
          />
          <span className="product-category">{category}</span>
        </div>
        <div className="product-info">
          <h3 className="product-name">{name}</h3>
          <p className="product-price">${price.toFixed(2)}</p>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;