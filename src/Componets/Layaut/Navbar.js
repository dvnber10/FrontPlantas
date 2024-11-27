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
    <div className={`${storage ? 'dark-theme' : 'ligth-theme'} container-row`}>
      <div className={`comunes`}>
        <div className='routes'>
          <NavLink to="/"> Inicio</NavLink>
          <NavLink to="NewRegister"> Crear nuevo</NavLink>
        </div>

        {/* Barra de búsqueda */}
        <form  className='search' onSubmit={handleSearch}>
          <div className="box-search">
            <input
              className='buscar'
              type="text"
              placeholder="Buscar plantas..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button
              className='boton'
              type="submit"
            >
              Buscar
            </button>
          </div>
        </form>
        <div className="theme">
          <ThemeSwitcher setStorage={setStorage} storage={storage} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
