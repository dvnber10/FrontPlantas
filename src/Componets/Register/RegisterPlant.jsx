import React, { useEffect, useState } from 'react'
import '../../Styles/plants.scss'
import { imgDefault } from './RegisterDesease'
import { useForm } from 'react-hook-form'
import SearchFamilys from '../Utils/SearchFamilys'
import { useQueryClient } from '@tanstack/react-query'

const RegisterPlant = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const [preview, setPreview] = useState(null)
  const [dataFamilia, setDataFamilia] = useState([])
  const [Habilitar, setHabilitar] = useState(false)

  const queryClient = useQueryClient()
  queryClient.cancelQueries()
  Habilitar && queryClient.removeQueries({ queryKey: ['KeyOneFamily'] })

  useEffect(() => {
    dataFamilia.length !== 0 && setHabilitar(true)
  }, [dataFamilia, Habilitar])

  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <div>
      <h2>Registrar Planta</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="cont-form">
        {/* Name  */}
        <div className="name">
          <label htmlFor="name"> Nombre de la Planta:</label>
          <input
            type="text"
            {...register('name', {
              required: {
                value: true,
                message: 'Name required',
              },
            })}
            id="name"
            placeholder="Nombre"
          />
          {<h5 className="alert">{errors.name?.message}</h5>}
        </div>

        <div className="form-row">
          {/* Description */}
          <div className="description">
            <label htmlFor="description">Descripción:</label>
            <textarea
              id="description"
              {...register('description', {
                required: {
                  value: true,
                  message: 'Description required',
                },
              })}
              placeholder="Aqui puedes agregar informacion basica de la planta."
            ></textarea>
          </div>

          {/* Image */}
          <div className="image">
            <label htmlFor="image">Imagen:</label>
            <input
              type="file"
              id="image"
              {...register('image', {
                required: {
                  value: true,
                  message: 'Image required',
                },
                onChange: (e) => {
                  setPreview(URL.createObjectURL(e.target.files[0]))
                },
              })}
              accept="image/*"
            />
            {<h5 className="alert">{errors.image?.message}</h5>}
            <div>
              <p>Previsualización:</p>
              <img src={preview || imgDefault} alt="Previsualización" />
            </div>
          </div>
        </div>

        {/* Family */}
        <div className="family">
          <h3>Familia</h3>
          <div className="caja-buscador">
            <div className={`show-family ${Habilitar && 'activado'} `}>
              {Habilitar && (
                <p
                  className="cambiar"
                  onClick={() => {
                    setHabilitar(false)
                    setDataFamilia([])
                  }}
                >
                  Cambiar
                </p>
              )}
              <span
                style={{
                  width: '100%',
                  height: '90%',
                  display: 'flex',
                  textAlign: 'center',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                {dataFamilia.length !== 0 ? (
                  <div>
                    <p>{dataFamilia[1]}</p>
                  </div>
                ) : (
                  <>Aqui es donde se mostrara familia selecionada</>
                )}
              </span>
            </div>
            {Habilitar ? (
              <div className="sobre">Desabilitado</div>
            ) : (
              <SearchFamilys setDataFamilia={setDataFamilia} />
            )}
          </div>
        </div>

        {/* Diseases */}
        <div className="diseases">
          <h3>Enfermedades</h3>
          <div className="show-diseases">
            <div className="buscador">
              <div className="caja-search">
                <input
                  type="text"
                  id="disease"
                  name="disease"
                  placeholder="Busca enfermedad"
                  required
                />
                <button type="button">Buscar</button>
              </div>
              <div className="muestras"></div>
            </div>
            <div className="Show-diseases"></div>
          </div>
        </div>
        <button type="submit" onClick={handleSubmit}>
          Registrar
        </button>
      </form>
    </div>
  )
}

export default RegisterPlant
