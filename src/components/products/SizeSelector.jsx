export default function SizeSelector({ sizes, selectedSize, onSelectSize }) {
  return (
    <div className="size-selector">
      <h3>Tallas disponibles</h3>
      <div className="size-grid">
        {sizes.map(size => (
          <button
            key={size}
            className={`size-btn ${selectedSize === size ? 'selected' : ''}`}
            onClick={() => onSelectSize(size)}
          >
            {size}
          </button>
        ))}
      </div>
    </div>
  );
}