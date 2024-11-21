import React from 'react'
import { useParams } from 'react-router-dom'
import { GetOnePlant } from '../Hooks/Plant';
import Navbar from '../Componets/Navbar';
import '../Styles/details.scss'

const PlantDetail = () => {
  const { id } = useParams();
  console.log(id);
  const { data: result, isSuccess, isLoading } = GetOnePlant(id);
  const Planta = isSuccess && result.data
  return (
    <div >
      <Navbar />
      <div>
        {isLoading && <p>Cargando...</p>}
        {isSuccess && Planta && (
          <div className='cont-register'>
            <h1>{Planta.name}</h1>
            <p>{Planta.description}</p>
            <img src={Planta.imagen} alt={Planta.name } className='image-detail' />
          </div>
        )}
      </div>
    </div>
  )
}

export default PlantDetail