import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '/src/context/CartContext';
import '/src/styles/products/ProductCard.css';

const ProductCard = ({
  id,
  name,
  price,
  image,
  category,
  colors = ['Negro', 'Blanco', 'Rojo'],
  sizes = ['38', '39', '40', '41', '42']
}) => {
  const { addToCart } = useCart(); // Obtener la función addToCart del contexto

  const [selectedSize, setSelectedSize] = useState(
    typeof sizes[0] === 'string' ? sizes[0] : sizes[0]?.size || ''
  );
  const [isHovered, setIsHovered] = useState(false);
  const [isAdding, setIsAdding] = useState(false); // Estado para mostrar feedback

  const handleAddToCart = () => {
    setIsAdding(true);
    
    // Crear el objeto del producto con las selecciones
    const productToAdd = {
      id: `${id}-${selectedSize}`, // ID único para cada variante
      originalId: id, // ID original del producto
      name,
      price,
      image,
      category,
      size: selectedSize,
      quantity: 1
    };

    // Agregar al carrito
    addToCart(productToAdd);
    
    // Feedback visual
    setTimeout(() => {
      setIsAdding(false);
    }, 500);
    
    console.log(`Agregado al carrito: ${name}, Talla: ${selectedSize}`);
  };

  return (
    <div 
      className="product-card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="product-image">
        <Link to={`/product/${id}`}>
          <img 
            src={image}
            alt={name}
            className="product-img"
          />
        </Link>
        <div className="product-category">
          {category}
        </div>
      </div>

      <div className="product-info">
        <Link to={`/product/${id}`}>
          <h3 className="product-name">{name}</h3>
        </Link>
        <p className="product-price">${price.toFixed(2)}</p>

        {/* Selector de tallas */}
        <div className="size-selector">
          {sizes.map((size, index) => {
            const sizeValue = typeof size === 'string' ? size : size.size;
            const isAvailable = typeof size === 'string' ? true : size.available !== false;
                        
            return (
              <button
                key={`size-${index}-${sizeValue}`}
                className={`size-option ${selectedSize === sizeValue ? 'selected' : ''} ${!isAvailable ? 'disabled' : ''}`}
                onClick={() => isAvailable && setSelectedSize(sizeValue)}
                disabled={!isAvailable}
              >
                {sizeValue}
              </button>
            );
          })}
        </div>

        {/* Botón agregar al carrito */}
        <div className="conten-btn">
          <button 
            className={`add-to-cart-btn ${isAdding ? 'adding' : ''}`}
            onClick={handleAddToCart}
            disabled={isAdding}
          >
            {isAdding ? 'Agregando...' : 'Agregar'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;