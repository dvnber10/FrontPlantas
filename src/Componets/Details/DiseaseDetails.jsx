import React, { useEffect } from 'react'
import { GetDiseaseOne } from '../../Hooks/Desease'
import { useParams } from 'react-router-dom'

function DiseaseDetails() {
  const { id } = useParams() // Get id from url params
  const { data: result, isLoading, isSuccess } = GetDiseaseOne(id)
  const [cargar, setCargar] = React.useState(true)
  const Disease = isSuccess && result.data

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
        Disease && (
          <div className="container-file">
            <div className="hoja">
              <h1 className="title"> {Disease.diseasesName} </h1>

              <div className="container-image">
                <img
                  src={Disease.imagen}
                  alt={Disease.diseasesName}
                  className="image-detail"
                  route={'Disease'}
                />
              </div>

              <section className="description">
                <h2>Datalles</h2>
                <article>{Disease.diseasesDescription}</article>
              </section>
            </div>
          </div>
        )
      )}
    </div>
  )
}

export default DiseaseDetails
