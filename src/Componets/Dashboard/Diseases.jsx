import React from 'react'
import Card from '../Card';
import { GetDisease } from '../../Hooks/Desease';
import { useOutletContext } from 'react-router-dom';

function Diseases() {

    const { data: result, isSuccess, isLoading, isError } = GetDisease();
    const Diseases = isSuccess && result.data

    const [storage] = useOutletContext();
    return (
        <div>
            <h2 className={`${storage ? 'title-dark' : 'title-ligth'} title-fijo`}>Enfermedades</h2>
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
                                isSuccess && Diseases.map((card) => (
                                    <Card key={card.id} id={card.id} name={card.diseasesName} image={card.imagen} />
                                ))
                        }
                    </div>
            }
        </div>
    )
}

export default Diseases
