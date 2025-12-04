
export const Item = ({ name, price, description, imageUrl, children }) => {
return (
  <article className="product-item card shadow-sm h-100 border-0">
    <div className="product-img-wrapper">
      <img
        src={imageUrl}
        alt={description}
        className="card-img-top img-fluid"
      />
    </div>

    <div className="card-body d-flex flex-column">
      <h2 className="card-title h5 text-truncate mb-2">{name}</h2>

      <p className="card-text mb-1">
        Precio: <span className="fw-bold product-price">${price}</span>
      </p>

      <p className="card-text text-muted small flex-grow-1">
        Descripción: {description}
      </p>

      <div className="mt-auto product-actions">
        {children}
      </div>
    </div>
  </article>
);
};