import React from 'react';
import { useParams, useLocation } from 'react-router-dom';
import CategoryLayout from '../../components/layout/CategoryLayout';

const KidsPage = () => {
  const { pathname } = useLocation();
  const { '*': subcategory } = useParams();

  return (
    <CategoryLayout title="Niños/as">
      <div className="category-content">
        {!subcategory ? (
          <>
            <h2>Todos los productos para Niños/as</h2>
            {/* Listado completo de productos */}
          </>
        ) : (
          <>
            <h2>{subcategory.replace('-', ' ')} para Niños/as</h2>
            {/* Productos filtrados por subcategoría */}
          </>
        )}
      </div>
    </CategoryLayout>
  );
};

export default KidsPage;