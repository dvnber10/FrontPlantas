import React from 'react'
import Navbar from '../Componets/Navbar'
import { GetPlants } from '../Hooks/Plant'
import Card from '../Componets/Card';


const Index = () => {
  const { data: result, isSuccess, isLoading } = GetPlants()
  const Plantas = isSuccess && result.data
  return (
    <div>
      <Navbar />
      <div className="cards-container">
        {
          isLoading ? <span className='carga'><img className="Loading" src="https://mvalma.com/inicio/public/include/img/ImagenesTL/paginaTL/Cargando.gif" alt="Cargando" /></span>
            : isSuccess && Plantas.map((card) => (
              <Card
                key={card.id}
                id={card.id} 
                name={card.name}
                image={card.imagen}
              />
            ))
        }
      </div>
    </div>
  )
}

export default Index