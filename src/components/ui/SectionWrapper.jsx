import React from 'react';
import PropTypes from 'prop-types';  // Importación correcta después de instalar
import '/src/styles/components/ui/SectionWrapper.css';

const SectionWrapper = ({ 
  children, 
  className = '', 
  bgColor = 'transparent', 
  padding = 'py-12 px-4 md:py-16 md:px-8', 
  maxWidth = 'max-w-6xl' 
}) => {
  return (
    <section 
      className={`w-full ${bgColor} ${padding}`}
    >
      <div className={`mx-auto ${maxWidth} ${className}`}>
        {children}
      </div>
    </section>
  );
};

// Validación de props con PropTypes
SectionWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  bgColor: PropTypes.string,
  padding: PropTypes.string,
  maxWidth: PropTypes.string,
};

export default SectionWrapper;