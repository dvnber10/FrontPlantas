import React, { useState } from 'react';
import ThemeSwitcher from './ThemeSwitcher';
import { NavLink, useNavigate } from 'react-router-dom';
import '../../Styles/navbar.scss'

const Navbar = ({ setStorage, storage }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?query=${searchQuery}`);
    }
  };

  return (
    <div className={`${storage ? 'dark-theme' : 'ligth-theme'} comunes`}>
      <div className='routes'>
        <NavLink to="/"> Inicio</NavLink>
        <NavLink to="NewRegister"> Crear nuevo</NavLink>
        <NavLink to="update"> Actualizar Planta</NavLink>
      </div>

      {/* Barra de búsqueda */}
      <div className="search">
        <form onSubmit={handleSearch}>
          <input
            className='buscar'
            type="text"
            placeholder="Buscar plantas..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button
            className='buscar-btn'
            type="submit"
          >
            Buscar
          </button>
        </form>
      </div>
      <div className="theme">
        <ThemeSwitcher setStorage={setStorage} storage={storage} />
      </div>
    </div>
  );
};

export default Navbar;
