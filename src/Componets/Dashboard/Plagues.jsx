import React from 'react'
import { GetAllPlaga } from '../../Hooks/Pest'
import Card from '../Card';
import { useOutletContext } from 'react-router-dom';

function Plagues() {
  const { data: result, isLoading, isSuccess, isError } = GetAllPlaga();
  const Plagues = isSuccess && result.data;
  const [storage] = useOutletContext();
  return (
    <div>
      <h2 className={`${storage ? 'title-dark' : 'title-ligth'} title-fijo`}>Plagas</h2>
      {
        isLoading ?
          <spam className='cargada'>
            <img
              className="loading"
              src="https://mvalma.com/inicio/public/include/img/ImagenesTL/paginaTL/Cargando.gif"
              alt="Loaging ..."
            />
          </spam>
          :
          <div className='container-flow'>
            {
              isError ?
                <>no se encontro data</>
                :
                isSuccess && Plagues.map((card) => (
                  <Card key={card.id} id={card.id} name={card.name} image={card.image} />
                ))
            }
          </div>
      }
    </div>
  )
}

export default Plagues
