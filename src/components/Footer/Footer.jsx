export const Footer = () => {
  return (
    <footer className="bg-dark text-light mt-auto py-3">
      <div className="container text-center">
        <p className="mb-0 small">
          Página creada por <span className="fw-semibold">Micaela</span> &copy; {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
};
