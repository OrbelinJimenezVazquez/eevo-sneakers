import React from 'react';
import { useParams, useLocation } from 'react-router-dom';
import CategoryLayout from '../../components/layout/CategoryLayout';

const WomanPage = () => {
  const { pathname } = useLocation();
  const { '*': subcategory } = useParams();

  return (
    <CategoryLayout title="Mujeres">
      <div className="category-content">
        {!subcategory ? (
          <>
            <h2>Todos los productos para Dama</h2>
            {/* Listado completo de productos */}
          </>
        ) : (
          <>
            <h2>{subcategory.replace('-', ' ')} para Damas</h2>
            {/* Productos filtrados por subcategoría */}
          </>
        )}
      </div>
    </CategoryLayout>
  );
};

export default WomanPage;