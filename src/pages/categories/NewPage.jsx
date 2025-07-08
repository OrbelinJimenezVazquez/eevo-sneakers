import React from 'react';
import { useParams, useLocation } from 'react-router-dom';
import CategoryLayout from '../../components/layout/CategoryLayout';

const NewPage = () => {
  const { pathname } = useLocation();
  const { '*': subcategory } = useParams();

  return (
    <CategoryLayout title="Lo Nuevo">
      <div className="category-content">
        {!subcategory ? (
          <>
            <h2>Todos los productos nuevos en la tienda</h2>
            {/* Listado completo de productos */}
          </>
        ) : (
          <>
            <h2>Lo mas nuevo para {subcategory.replace('-', ' ')}</h2>
            {/* Productos filtrados por subcategoría */}
          </>
        )}
      </div>
    </CategoryLayout>
  );
};

export default NewPage;