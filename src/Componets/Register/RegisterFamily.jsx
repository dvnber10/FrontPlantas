import React from 'react';
import { CreateFamilyData } from '../../Hooks/Family';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

//  Se declara modelo de entrada de datos
const schema = yup.object({
  Name: yup.string().required(),
  Description: yup.string().required(),
}).required();

const RegisterFamily = () => {

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });

  const navigate = useNavigate(); // It's called navigate for choose page
  const mutation = CreateFamilyData(); // It's called the mutation

  const onSubmit = (data) => {
    const family = {
      Name: data.Name,
      Description: data.Description,
    }
    mutation.mutate(family)

  }
  return (
    <div>
      <h2>Registrar Familia</h2>
      <form onSubmit={handleSubmit(onSubmit)} className='cont-form'>
        <div className='name'>

          <label htmlFor='name'> Nombre de la Familia: </label>
          <input type='text'
            {...register("Name",
              {
                required: true,
                maxLength: 50,
                minLength: 20,
                message: "Nombre de la Familia vacio"
              }
            )} id="name" placeholder='Familia' />
          <h5 className='alert'>{errors.Name?.message}</h5>
        </div>
        <div className='form-row'>
          <div className="description">
            <label htmlFor='description'> Descripción:</label>
            <textarea {...register("Description",
              {
                required: true,
                minLength: 200,
                message: "Descripción vacia"
              })} id='description' />
            <h5 className='alert'>{errors.Description?.message}</h5>
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
            backdrop: "linear-gradient(to right, #60C8B3, black)",
          })
          && navigate("/")
        }
        {
          mutation.isError && <span>Parece que algo fallo, intenta de nuevo</span>
        }
      </form>
    </div>
  );
};

export default RegisterFamily;
