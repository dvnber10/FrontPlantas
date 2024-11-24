import React from 'react'
import { useParams } from 'react-router-dom'
import { GetOnePlant } from '../Hooks/Plant';
import '../Styles/details.scss'

const PlantDetail = () => {
  const { id } = useParams();
  const { data: result, isSuccess, isLoading } = GetOnePlant(id);
  const Plant = isSuccess && result.data
  return (
    <div>
      {isLoading && <p>Cargando...</p>}
      {isSuccess && Plant && (
        <div className='cont-register'>
          <h1> {Plant.name} </h1>

          <section className="description">
            <img src={Plant.imagen} alt={Plant.name} className='image-detail' />
            <article>{Plant.description}</article>
          </section>
          
        </div>
      )}
    </div>
  )
}

export default PlantDetail