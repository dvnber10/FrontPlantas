import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { GetOnePlague } from '../../Hooks/Pest'

function DetailsPlague() {
  const { id } = useParams()
  const { data: result, isLoading, isSuccess } = GetOnePlague(id)
  const [cargar, setCargar] = useState(true)

  const Plague = isSuccess && result.data

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
        Plague && (
          <div className="container-file">
            <div className="hoja">
              <h1 className="title"> {Plague.name} </h1>

              {/* <div className="container-image">
                                {!imageLoaded && (
                                    <img
                                        className="loading"
                                        src="https://mvalma.com/inicio/public/include/img/ImagenesTL/paginaTL/Cargando.gif"
                                        alt="Loading ..."
                                    />
                                )}
                                <img
                                    src={Plague.image}
                                    alt={Plague.name}
                                    className="image-detail"
                                    style={{ display: imageLoaded ? 'block' : 'none' }} // Solo se muestra cuando ha cargado
                                    onLoad={handleImageLoad} // Llamamos a la función cuando la imagen carga
                                />
                            </div> */}

              <div className="container-image">
                <img
                  src={Plague.image}
                  alt={Plague.name}
                  className="image-detail"
                />
              </div>

              <section className="description">
                <h2>Datalles</h2>
                <article>{Plague.description}</article>
              </section>
            </div>
          </div>
        )
      )}
    </div>
  )
}

export default DetailsPlague
