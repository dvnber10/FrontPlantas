import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { GetOnePlant } from '../Hooks/Plant';
import '../Styles/details.scss'

const PlantDetail = ({ route }) => {

  const [datos, setDatos] = useState();
  const { id } = useParams();
  const { data: result, isSuccess, isLoading } = GetOnePlant(id);
  const Plant = isSuccess && result.data
  return (
    <div>
      {
        isLoading && <spam className='cargada'>
          <img
            className="loading"
            src="https://mvalma.com/inicio/public/include/img/ImagenesTL/paginaTL/Cargando.gif"
            alt="Loaging ..."
          />
        </spam>
      }
      {
        isSuccess && Plant &&
        <div className='container-file'>
          <div className='hoja'>            
            <h1 className='title'> {Plant.name} </h1>

            <div className="container-image">
              <img src={Plant.imagen} alt={Plant.name} className='image-detail' />
            </div>

            <section className="description">
              <h2>Datalles</h2>
              <article>{Plant.description}</article>
            </section>
          </div>
        </div>
      }
    </div>
  )
}

export default PlantDetail