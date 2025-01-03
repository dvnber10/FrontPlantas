import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { GetOnePlant } from '../Hooks/Plant'
import '../Styles/details.scss'

const PlantDetail = ({ route }) => {
  const { id } = useParams()
  const { data: result, isSuccess, isLoading } = GetOnePlant(id)
  const [cargar, setCargar] = useState(true)
  const Plant = isSuccess && result.data

  useEffect(() => {
    setTimeout(() => {
      setCargar(false)
    }, 400)
  }, [])
  return (
    <div>
      {isLoading ? (
        <span className="cargada">
          <img
            className="loading"
            src="https://mvalma.com/inicio/public/include/img/ImagenesTL/paginaTL/Cargando.gif"
            alt="Loaging ..."
          />
        </span>
      ) : cargar ? (
        <span className="cargada">
          <img
            className="loading"
            src="https://mvalma.com/inicio/public/include/img/ImagenesTL/paginaTL/Cargando.gif"
            alt="Loaging ..."
          />
        </span>
      ) : (
        isSuccess &&
        Plant && (
          <div className="container-file">
            <div className="hoja">
              <h1 className="title"> {Plant.name} </h1>

              <div className="container-image">
                <img
                  src={Plant.imagen}
                  alt={Plant.name}
                  className="image-detail"
                />
              </div>

              <section className="description">
                <h2>Datalles</h2>
                <article>{Plant.description}</article>
              </section>
            </div>
          </div>
        )
      )}
    </div>
  )
}

export default PlantDetail
