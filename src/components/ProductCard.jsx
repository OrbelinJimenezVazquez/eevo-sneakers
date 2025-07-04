import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '/src/styles/ProductCard.css';

const ProductCard = ({ id, name, price, image, category, colors = ['Negro', 'Blanco', 'Rojo'], sizes = ['38', '39', '40', '41', '42'] }) => {
  const [selectedColor, setSelectedColor] = useState(colors[0]);
  const [selectedSize, setSelectedSize] = useState(sizes[0]);
  const [isHovered, setIsHovered] = useState(false);

  const handleAddToCart = () => {
    // Lógica para agregar al carrito
    console.log(`Agregado al carrito: ${name}, Talla: ${selectedSize}, Color: ${selectedColor}`);
  };

  return (
    <div 
      className="product-card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="product-image-container">
        <Link to={`/product/${id}`} className="product-link">
          <img 
            src={image} 
            alt={name} 
            className="product-image"
            loading="lazy"
          />
        </Link>
        <span className="product-category">{category}</span>
        
        {/* Controles de color (solo visible en hover) */}
        {isHovered && (
          <div className="color-selector">
            {colors.map(color => (
              <button
                key={color}
                className={`color-option ${selectedColor === color ? 'active' : ''}`}
                style={{ backgroundColor: getColorHex(color) }}
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedColor(color);
                }}
                aria-label={`Color ${color}`}
              />
            ))}
          </div>
        )}
      </div>

      <div className="product-info">
        <Link to={`/product/${id}`} className="product-link">
          <h3 className="product-name">{name}</h3>
          <p className="product-price">${price.toFixed(2)}</p>
        </Link>

        {/* Selector de tallas */}
        <div className="size-selector">
          {sizes.map(size => (
            <button
              key={size}
              className={`size-option ${selectedSize === size ? 'active' : ''}`}
              onClick={() => setSelectedSize(size)}
            >
              {size}
            </button>
          ))}
        </div>

        {/* Botón agregar al carrito */}
        <button 
          className="add-to-cart-btn"
          onClick={handleAddToCart}
        >
          <i className="fas fa-shopping-cart"></i> Agregar
        </button>
      </div>
    </div>
  );
};

// Función auxiliar para convertir nombres de colores a valores HEX
function getColorHex(colorName) {
  const colors = {
    'Negro': '#000000',
    'Blanco': '#FFFFFF',
    'Rojo': '#FF0000',
    'Azul': '#0000FF',
    'Verde': '#00FF00',
    'Amarillo': '#FFFF00',
    'Gris': '#808080',
    'Rosa': '#FFC0CB',
    'Morado': '#800080',
    'Naranja': '#FFA500'
  };
  return colors[colorName] || '#CCCCCC';
}

export default ProductCard;