export const ProductFormUI = ({
  product,
  errors,
  loading,
  onChange,
  onFileChange,
  onSubmit,
}) => {
  return (
    <section className="container my-4">
      <div className="row justify-content-center">
        <div className="col-12 col-md-8 col-lg-6">
          <div className="card shadow-sm border-0">
            <div className="card-body p-4">
              <h2 className="h4 mb-4 text-center">Agregar producto</h2>

              <form onSubmit={onSubmit} noValidate>
                {/* Nombre */}
                <div className="mb-3">
                  <label className="form-label" htmlFor="name">
                    Nombre
                  </label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    className={`form-control ${errors.name ? "is-invalid" : ""}`}
                    value={product.name}
                    onChange={onChange}
                    required
                  />
                  {errors.name && (
                    <div className="invalid-feedback d-block">
                      {errors.name}
                    </div>
                  )}
                </div>

                {/* Precio */}
                <div className="mb-3">
                  <label className="form-label" htmlFor="price">
                    Precio
                  </label>
                  <input
                    id="price"
                    type="number"
                    name="price"
                    className={`form-control ${errors.price ? "is-invalid" : ""}`}
                    value={product.price}
                    onChange={onChange}
                    required
                  />
                  {errors.price && (
                    <div className="invalid-feedback d-block">
                      {errors.price}
                    </div>
                  )}
                </div>

                {/* Categoría */}
                <div className="mb-3">
                  <label className="form-label" htmlFor="category">
                    Categoría
                  </label>
                  <input
                    id="category"
                    type="text"
                    name="category"
                    className={`form-control ${
                      errors.category ? "is-invalid" : ""
                    }`}
                    value={product.category}
                    onChange={onChange}
                    required
                  />
                  {errors.category && (
                    <div className="invalid-feedback d-block">
                      {errors.category}
                    </div>
                  )}
                </div>

                {/* Descripción */}
                <div className="mb-3">
                  <label className="form-label" htmlFor="description">
                    Descripción
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    className={`form-control ${
                      errors.description ? "is-invalid" : ""
                    }`}
                    rows="3"
                    value={product.description}
                    onChange={onChange}
                    required
                  />
                  {errors.description && (
                    <div className="invalid-feedback d-block">
                      {errors.description}
                    </div>
                  )}
                </div>

                {/* Imagen */}
                <div className="mb-3">
                  <label className="form-label" htmlFor="image">
                    Imagen
                  </label>
                  <input
                    id="image"
                    type="file"
                    accept="image/*"
                    className={`form-control ${errors.file ? "is-invalid" : ""}`}
                    onChange={(e) =>
                      onFileChange(e.target.files?.[0] ?? null)
                    }
                  />
                  {errors.file && (
                    <div className="invalid-feedback d-block">
                      {errors.file}
                    </div>
                  )}
                </div>

                {/* Botón */}
                <button
                  className="btn btn-primary w-100"
                  type="submit"
                  disabled={loading}
                >
                  {loading ? "Guardando..." : "Guardar"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
