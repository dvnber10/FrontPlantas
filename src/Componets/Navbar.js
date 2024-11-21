import React ,{ useState } from 'react';
import ThemeSwitcher from './ThemeSwitcher';
import { Link, useNavigate } from 'react-router-dom';
import '../Styles/navbar.scss'

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?query=${searchQuery}`);
    }
  };

  return (
    <nav className="navbar">
      <div>
        <Link to="/" >
          Inicio
        </Link>
        <Link to="/NewRegister" >
          Crear Planta
        </Link>
        <Link to="/update" >
          Actualizar Planta
        </Link>
      </div>

      {/* Barra de búsqueda */}
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Buscar plantas..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          style={{
            padding: "5px",
            borderRadius: "4px",
            border: "1px solid #ccc",
            marginRight: "5px",
          }}
        />
        <button
          type="submit"
          style={{
            padding: "5px 10px",
            borderRadius: "4px",
            border: "1px",
            backgroundColor: "#007bff",
            color: "#fff",
            cursor: "pointer",
            marginRight: "15px",
          }}
        >
          Buscar
        </button>
      </form>
      <ThemeSwitcher />
    </nav>
  );
};

export default Navbar;
