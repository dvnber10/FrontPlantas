import React, { useState } from 'react'
import { GetOneFamily } from '../../Hooks/Family'
import { useQueryClient } from '@tanstack/react-query'

function SearchFamilys({ setDataFamilia }) {
  const queryClient = useQueryClient()

  const [Name, setName] = useState()
  const [Consulta, setConsulta] = useState()

  const { data: result, isLoading, isSuccess, isError, error } = GetOneFamily(
    Consulta,
  )
  const DataFamily = isSuccess && result.data
  const ErrorValue = isError && error?.response.data.statusCode
  return (
    <div className="search-family">
      <input
        type="text"
        id="family"
        onChange={(e) => {
          setName(e.target.value)
        }}
        placeholder="Busca familia de la planta"
      />
      <button
        onClick={() => {
          queryClient.removeQueries({ queryKey: ['KeyOneFamily'] })
          setConsulta(Name)
        }}
      >
        Buscar
      </button>
      <div className="muestras">
        {isLoading && <span className="">Loading ... </span>}
        {isSuccess &&
          DataFamily?.map((familia) => {
            return (
              <button
                style={{ margin: '4px' }}
                onClick={() => {
                  setDataFamilia([familia.id, familia.name])
                  queryClient.invalidateQueries({ queryKey: ['KeyOneFamily'] })
                  setConsulta('')
                  setName('')
                }}
                key={familia.id}
              >
                {familia.name}
              </button>
            )
          })}
        {isError && ErrorValue === 404 && (
          <span>No existe familia, agrega esta familia.</span>
        )}
      </div>
    </div>
  )
}

export default SearchFamilys
