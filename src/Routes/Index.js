import React, { useEffect, useState } from 'react'
import Navbar from '../Componets/Navbar'
import { Outlet } from 'react-router-dom';


const Index = () => {

  const [storage, setStorage] = useState(false);

  useEffect(() => {
    let store = localStorage.getItem('IsDark');
    setStorage(store);
  }, []);

  return (
    <div className={storage ? 'ligth' : 'dark'}>
      <Navbar storage={storage} setStorage={setStorage} />
      <Outlet />
    </div>
  )
}


export default Index