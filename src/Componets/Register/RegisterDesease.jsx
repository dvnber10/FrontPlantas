import React, { useState } from 'react';
import { CreateDeseasesData } from '../../Hooks/Desease';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';


export const imgDefault = 'https://www.comparapps.com/wp-content/uploads/2020/03/imagenes-para-paginas-web.png'; // declaracion de la imagen por default
const RegisterDisease = () => {

  const { register, handleSubmit, formState: { errors } } = useForm();
  const [preview, setPreview] = useState(null);

  const navigate = useNavigate();

  const mutation = CreateDeseasesData()

  const onSubmit = (data) => {
    const desease = {
      name: data.name,
      description: data.description,
      image: data.image[0],
    }
    mutation.mutate(desease);
  }

  return (
    <div>.
      <h2>Registrar Enfermedad</h2>
      <form onSubmit={handleSubmit(onSubmit)} className='cont-form'>
        <div className='name'>
          <label htmlFor='name'> Nombre de la Enfermedad:</label>
          <input
            {...register("name",
              {
                required: {
                  value: true,
                  message: "Name is required"
                }
              }
            )}
            placeholder='Enfermedad'
          />
          {<h5 className="alert" style={{ color: 'black' }}>{errors.name?.message}</h5>}
        </div>
        <div className='form-row'>
          <div className="description">
            <label htmlFor='description'>Descripción:</label>
            <textarea name="description" id='description'
              {...register('description', {
                required: {
                  value: true,
                  message: 'Description is required'
                }
              })}
              placeholder='Aqui puedes agregar informacion de la enfermedad.'></textarea>
            {<h5 className='alert'>{errors.description?.message}</h5>}
          </div>
          <div className="image">
            <label htmlFor='image'>Imagen:</label>
            <input type="file" id='image' accept="image/*" 
            {...register('image',
              {
                required:{
                  value: true,
                  message: 'Image required'
                },
                onChange: (e) => {
                  setPreview(URL.createObjectURL(e.target.files[0]))
                }
              }
            )} />
            {<h5 className='alert'>{errors.image?.message}</h5>}
              <div>
                <p>Previsualización:</p>
                <img htmlFor='image' src={preview || imgDefault} alt="Previsualización" />
              </div>
          </div>

        </div>
        <button type="submit">Registrar</button>
        {
          mutation.isPending && <span className='modal'><img className="Loading" src="https://mvalma.com/inicio/public/include/img/ImagenesTL/paginaTL/Cargando.gif" alt="Cargando" /></span>
        }
        {
          mutation.isSuccess && Swal.fire({
            title: 'El recurso fue cargado con exito',
            icon: 'success',
            confirmButtonColor: '#1B5091',
            customClass: {
              popup: 'swal2-minimal',
            },
          })
          && navigate("/diseases")
        }
        {
          mutation.isError && <h5 className='alert'>{mutation.error?.message}</h5>
        }
      </form>
    </div>
  );
};

export default RegisterDisease;
