// components/SectionWrapper.jsx
import React from 'react';
import '/src/styles/SectionWrapper.css';

const SectionWrapper = ({ title, children, bgColor = 'transparent' }) => {
  return (
    <section className="section-wrapper" style={{ backgroundColor: bgColor }}>
      <div className="section-container">
        {title && <h2 className="section-title">{title}</h2>}
        {children}
      </div>
    </section>
  );
};

export default SectionWrapper;