import React from 'react'
import { useParams } from 'react-router-dom'
import { GetOnePlant } from '../Hooks/Plant';
import Navbar from '../Componets/Navbar';
import '../Styles/details.scss'

const PlantDetail = () => {
  const { id } = useParams();
  console.log(id);
  const { data: result, isSuccess, isLoading } = GetOnePlant(id);
  const Plant = isSuccess && result.data
  return (
    <div >
      <Navbar />
      <div>
        {isLoading && <p>Cargando...</p>}
        {isSuccess && Plant && (
          <div className='cont-register'>
            <h1>{Plant.name}</h1>
            <p>{Plant.description}</p>
            <img src={Plant.imagen} alt={Plant.name } className='image-detail' />
          </div>
        )}
      </div>
    </div>
  )
}

export default PlantDetail