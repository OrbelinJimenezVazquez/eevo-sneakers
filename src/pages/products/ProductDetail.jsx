import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import products from '../../data/products/products.json';
import '/src/styles/products/ProductDetail.css';

export default function ProductDetail() {
  const { id } = useParams();
  const { addToCart } = useCart();
  const product = products.find(p => p.id === parseInt(id));
  
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedColor, setSelectedColor] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [expandedSections, setExpandedSections] = useState({});
  
  // Usar las imágenes del producto o fallback
  const productImages = product?.images || [
    product?.image,
    product?.image,
    product?.image,
    product?.image
  ];
  
  // Usar los colores del producto o fallback
  const colorOptions = product?.colors || [
    { name: 'Negro/Blanco', image: product?.image, code: '001' },
    { name: 'Rojo/Blanco', image: product?.image, code: '600' },
    { name: 'Verde/Blanco', image: product?.image, code: '400' }
  ];
  
  // Usar las tallas del producto o fallback
  const sizeOptions = product?.sizes || [
    { size: 'CM 24 (US 6)', available: false },
    { size: 'CM 25.5', available: true },
    { size: 'CM 26', available: true },
    { size: 'CM 27', available: true },
    { size: 'CM 28', available: true }
  ];

  // Debug: verificar estructura de sizeOptions
  console.log('sizeOptions:', sizeOptions);
  console.log('sizeOptions type:', typeof sizeOptions[0]);

  if (!product) {
    return (
      <div className="product-not-found">
        <h2>Producto no encontrado</h2>
        <Link to="/catalog" className="back-button">
          Volver al catálogo
        </Link>
      </div>
    );
  }

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert('Por favor selecciona una talla');
      return;
    }
    addToCart({ 
      ...product, 
      size: selectedSize,
      color: colorOptions[selectedColor].name,
      quantity: 1 
    });
  };

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === productImages.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? productImages.length - 1 : prev - 1
    );
  };

  // Función para renderizar estrellas
  const renderStars = (rating) => {
    return '★'.repeat(Math.floor(rating)) + '☆'.repeat(5 - Math.floor(rating));
  };

  return (
    <div className="product-detail-container">
      {/* Thumbnails laterales */}
      <div className="product-thumbnails">
        {productImages.map((image, index) => (
          <div 
            key={`thumbnail-${index}`}
            className={`thumbnail ${index === currentImageIndex ? 'active' : ''}`}
            onClick={() => setCurrentImageIndex(index)}
          >
            <img src={image} alt={`Vista ${index + 1}`} />
          </div>
        ))}
      </div>

      {/* Imagen principal */}
      <div className="product-image">
        <img 
          src={productImages[currentImageIndex]} 
          alt={product.name}
          className="main-product-image"
        />
        <div className="image-navigation">
          <button className="nav-button" onClick={prevImage}>‹</button>
          <button className="nav-button" onClick={nextImage}>›</button>
        </div>
      </div>

      {/* Información del producto */}
      <div className="product-info">
        {product.details?.sustainable && (
          <div className="sustainable-badge">Materiales sostenibles</div>
        )}
        <h1 className="product-title">{product.name}</h1>
        <div className="product-category">{product.category}</div>
        <div className="product-price">${product.price}</div>

        {/* Selector de colores */}
        <div className="color-selector">
          <h3>Colores disponibles</h3>
          <div className="color-options">
            {colorOptions.map((color, index) => (
              <div 
                key={`color-${index}`}
                className={`color-option ${index === selectedColor ? 'active' : ''}`}
                onClick={() => setSelectedColor(index)}
                title={color.name}
              >
                <img src={color.image} alt={color.name} />
              </div>
            ))}
          </div>
          <div className="selected-color">
            Color seleccionado: {colorOptions[selectedColor].name}
          </div>
        </div>

        {/* Selector de tallas */}
        <div className="size-selector">
          <div className="size-selector-header">
            <h3>Selecciona tu talla</h3>
            <span className="size-guide">📏 Guía de tallas</span>
          </div>
          <div className="size-options">
            {sizeOptions.map((option, index) => {
              // Asegurarnos de que option es válido
              if (!option || (typeof option !== 'object' && typeof option !== 'string')) {
                console.error('Invalid size option:', option);
                return null;
              }
              
              const sizeValue = typeof option === 'string' ? option : option.size;
              const isAvailable = typeof option === 'string' ? true : option.available;
              
              return (
                <button 
                  key={`size-${index}-${sizeValue}`}
                  className={`size-option ${
                    !isAvailable ? 'unavailable' : 
                    selectedSize === sizeValue ? 'active' : ''
                  }`}
                  onClick={() => isAvailable && setSelectedSize(sizeValue)}
                  disabled={!isAvailable}
                >
                  {sizeValue}
                </button>
              );
            })}
          </div>
        </div>

        {/* Botones principales */}
        <div className="product-buttons">
          <button 
            className="add-to-cart-btn"
            onClick={handleAddToCart}
            disabled={!selectedSize}
          >
            Agregar al carrito
          </button>
          <button className="favorite-btn">
            Favoritos ♡
          </button>
        </div>

        {/* Información de envío */}
        <div className="shipping-info">
          <h3>Envío</h3>
          {product.shipping?.freeShipping && (
            <p>
              Envío gratis en pedidos superiores a ${product.shipping.freeShippingThreshold}
            </p>
          )}
          <p>
            Tiempo estimado de entrega: {product.shipping?.estimatedDelivery || "2-5 días laborables"}
          </p>
          <p>Para obtener información de envío precisa <span className="edit-location">Editar ubicación</span></p>
        </div>

        {/* Información del producto */}
        <div className="product-details">
          {product.details?.sustainable && (
            <div className="sustainable-info">
              <p>{product.details.sustainableDescription}</p>
            </div>
          )}
          
          <div className="product-description">
            {product.description}
          </div>

          {/* Características principales */}
          {product.features && (
            <div className="product-features">
              <h4>Características principales:</h4>
              <ul className="features-list">
                {product.features.map((feature, index) => (
                  <li key={`feature-${index}`}>{feature}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Especificaciones técnicas */}
          <ul className="product-specs">
            <li>Color que se muestra: {product.details?.colorShown || colorOptions[selectedColor].name}</li>
            <li>Estilo: {product.details?.style || `${product.id}-${colorOptions[selectedColor].code}`}</li>
            <li>País/región de origen: {product.details?.origin || 'Indonesia, Vietnam'}</li>
            {product.specifications && (
              <>
                <li>Material: {product.specifications.material}</li>
                <li>Suela: {product.specifications.sole}</li>
                <li>Peso: {product.specifications.weight}</li>
                <li>Tecnología: {product.specifications.technology}</li>
              </>
            )}
          </ul>

          <a href="#" className="product-link">Ver datos del producto</a>
        </div>

        {/* Secciones expandibles */}
        <div className="expandable-section">
          <div 
            className="expandable-header"
            onClick={() => toggleSection('shipping')}
          >
            <span>Envíos y devoluciones gratis</span>
            <span>{expandedSections.shipping ? '▲' : '▼'}</span>
          </div>
          {expandedSections.shipping && (
            <div className="expandable-content">
              <p>
                Envío gratis en pedidos superiores a ${product.shipping?.freeShippingThreshold || 50}. 
                Devoluciones gratis en un plazo de {product.shipping?.returnPeriod || 60} días.
              </p>
            </div>
          )}
        </div>

        {/* Cuidado del producto */}
        {product.care && (
          <div className="expandable-section">
            <div 
              className="expandable-header"
              onClick={() => toggleSection('care')}
            >
              <span>Cuidado del producto</span>
              <span>{expandedSections.care ? '▲' : '▼'}</span>
            </div>
            {expandedSections.care && (
              <div className="expandable-content">
                <ul>
                  {product.care.map((instruction, index) => (
                    <li key={`care-${index}`}>{instruction}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}

        <div className="expandable-section">
          <div 
            className="expandable-header"
            onClick={() => toggleSection('manufacturing')}
          >
            <span>Método de fabricación</span>
            <span>{expandedSections.manufacturing ? '▲' : '▼'}</span>
          </div>
          {expandedSections.manufacturing && (
            <div className="expandable-content">
              <p>
                {product.specifications ? 
                  `Este producto está fabricado con ${product.specifications.material.toLowerCase()} y utiliza tecnología ${product.specifications.technology}.` :
                  'Información sobre el proceso de fabricación y materiales utilizados.'
                }
              </p>
            </div>
          )}
        </div>

        {/* Reseñas */}
        <div className="reviews-section">
          <div className="reviews-header">
            <div className="reviews-title">
              Reseñas ({product.reviews?.count || 0})
            </div>
            <div className="reviews-rating">
              <span className="stars">
                {renderStars(product.reviews?.average || 0)}
              </span>
              <span className="rating-number">
                ({product.reviews?.average || 0})
              </span>
              <span>▼</span>
            </div>
          </div>
          
          {/* Desglose de reseñas */}
          {expandedSections.reviews && product.reviews?.breakdown && (
            <div className="reviews-breakdown">
              {Object.entries(product.reviews.breakdown).reverse().map(([stars, count]) => (
                <div key={`review-${stars}`} className="review-bar">
                  <span>{stars}★</span>
                  <div className="bar-container">
                    <div 
                      className="bar-fill" 
                      style={{ width: `${(count / product.reviews.count) * 100}%` }}
                    ></div>
                  </div>
                  <span>({count})</span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Sección "Cómo lo usan los demás" */}
        <div className="user-content-section">
          <h2>Cómo lo usan los demás</h2>
          <p>Sube tu foto y menciona a @Nike en Instagram para tener la oportunidad de que la muestren.</p>
          <button className="upload-photo-btn">Sube Tu Foto</button>
        </div>
      </div>
    </div>
  );
}