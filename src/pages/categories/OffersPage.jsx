import React from 'react';
import { useParams, useLocation } from 'react-router-dom';
import CategoryLayout from '../../components/layout/CategoryLayout';

const OffersPage = () => {
  const { pathname } = useLocation();
  const { '*': subcategory } = useParams();

  return (
    <CategoryLayout title="Ofertas">
      <div className="category-content">
        {!subcategory ? (
          <>
            <h2>Todos los productos con Descuento</h2>
            {/* Listado completo de productos */}
          </>
        ) : (
          <>
            <h2>{subcategory.replace('-', ' ')} con Descuento</h2>
            {/* Productos filtrados por subcategoría */}
          </>
        )}
      </div>
    </CategoryLayout>
  );
};

export default OffersPage;