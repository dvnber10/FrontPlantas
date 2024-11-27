import React from 'react';
import '../Styles/home.scss';
import { NavLink, Outlet, useOutletContext } from 'react-router-dom';

function Home() {

  const [storage] = useOutletContext();

  return (
    <>
      <div className="cards-container-flow">
        <div className="choose">
          <NavLink className='boton-choose' to='/'>Platas</NavLink>
          <NavLink className='boton-choose' to='diseases'>Enferemedades</NavLink>
          <NavLink className='boton-choose' to='plagues'>Plagas</NavLink>
        </div>

        <Outlet context={[storage]} />
      </div>
    </>
  )
}

export default Home
