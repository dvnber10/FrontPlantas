import React, { useState } from 'react';
import '../../Styles/Register.scss'
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { CreatePestData } from '../../Hooks/Pest';
import { useForm } from 'react-hook-form';
// import { computeHeadingLevel } from '@testing-library/react';
// import * as yup from "yup";
// import { yupResolver } from '@hookform/resolvers/yup';

// const schema = yup.object({
//   Name: yup.string().required(),
//   Description: yup.string().required(),
//   Image: yup.string().required()
// }).required();

const RegisterPest = () => {

  const { register, handleSubmit, formState: { errors } } = useForm(); // validator forms

  const [preview, setPreview] = useState([]);
  const navigate = useNavigate();

  const mutation = CreatePestData();

  // register('image',{
  //   onChange: (e) => {
  //     setPreview(URL.createObjectURL(e.target.files[0]))
  //   }
  // })

  const onSubmit = (data) => {
    const pest = {
      name: data.Name,
      description: data.Description,
      image: data.Image,
    }
    mutation.mutate(pest);
  }

  return (
    <div>
      <h2>Registrar Plaga</h2>
      <form onSubmit={handleSubmit(onSubmit)} className='cont-form'>
        <div className='name'>
          <label htmlFor='name'>Nombre de la Peste:</label>
          <input type="text" {...register('Name', {
            required: {
              value: true,
              message: 'Name required'
            }
          })} id='name' placeholder='Plaga' />
          <h5 className='alert'>{errors.Name?.message}</h5>
        </div>
        <div className='form-row'>
          <div className="description">
            <label htmlFor='description'>Descripción:</label>
            <textarea
              {...register("Description",
                {
                  required: {
                    value: true,
                    message: "Description required"
                  }

                })
              } id='name' placeholder='Aqui puede agregar informacion de la plaga.'
            />
            <h5 className='alert'>{errors.Description?.message}</h5>
          </div>
          <div className="image">
            <label htmlFor='image'> Imagen:</label>
            <input type="file" accept="image/*"
              {...register("image",
                {
                  required: {
                    value: true,
                    message: 'image required'
                  },
                  onChange: (e) => {
                    setPreview(URL.createObjectURL(e.target.files[0]))
                  }
                }
              )}
            />
            <h5 className='alert'>{errors.Image?.message}</h5>
            <div>
              <p>Previsualización:</p>
              <img src={ preview.length === 0 ? 'https://www.comparapps.com/wp-content/uploads/2020/03/imagenes-para-paginas-web.png' : preview } alt="Previsualización" />
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
          && navigate("/plagues")
        }
        {
          mutation.isError && <span>Parece que algo fallo, intenta de nuevo</span>
        }
      </form>
    </div>
  );
};

export default RegisterPest;
