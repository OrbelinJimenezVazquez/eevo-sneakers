import { useState } from 'react';
import '/src/styles/products/ProductDetail.css';
import '/src/styles/products/ProductGallery.css';

export default function ProductGallery({ images = [] }) { // Valor por defecto para images
  const [mainImage, setMainImage] = useState(images[0] || '');

  if (images.length === 0) {
    return <div className="no-images">No hay imágenes disponibles</div>;
  }

  return (
    <div className="product-gallery">
      <div className="main-image">
        <img src={mainImage} alt="Vista principal del producto" />
      </div>
      <div className="thumbnail-grid">
        {images.map((img, index) => (
          <img 
            key={index}
            src={img}
            alt={`Vista ${index + 1} del producto`}
            onClick={() => setMainImage(img)}
            className={mainImage === img ? 'active' : ''}
          />
        ))}
      </div>
    </div>
  );
}