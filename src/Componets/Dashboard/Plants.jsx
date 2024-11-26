import React from 'react'
import { GetPlants } from '../../Hooks/Plant'
import Card from '../Card'
import { useOutletContext } from 'react-router-dom'

function Plants() {
    // request at api for data of plant
    const { data: result, isSuccess, isLoading } = GetPlants()
    const Plant = isSuccess && result.data
    const [storage] = useOutletContext();

    return (
        <div>
            <h2 className={`${storage ? 'title-dark' : 'title-ligth'} title-fijo`}>Plantas</h2>
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
                            isSuccess && Plant.map((card) => (
                                <Card key={card.id} id={card.id} name={card.name} image={card.imagen} />
                            ))
                        }
                    </div>
            }
        </div>
    )
}

export default Plants
