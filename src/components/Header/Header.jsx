import { Link } from "react-router-dom";
import { Nav } from "../Nav/Nav";

export const Header = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm">
        <div className="container">
        
          <Link to="/" className="navbar-brand fw-bold">
            VIVASPORT
          </Link>
          <div className="collapse navbar-collapse justify-content-end" id="mainNavbar">
            <Nav />
          </div>
        </div>
      </nav>
    </header>
  );
};
