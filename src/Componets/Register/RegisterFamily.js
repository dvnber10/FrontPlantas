import React, { useState } from 'react';
import { CreateFamilyData } from '../../Hooks/Family';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
const RegisterFamily = () => {
  const [Name, setName] = useState("");
  const [Description, setDescription] = useState("");
  const navigate = useNavigate()
  const mutation = CreateFamilyData()

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!Name || !Description) {
      Swal.fire({
        title: 'Error al crear la Familia',
        icon: 'Error',
        confirmButtonColor: '#1B5091',
        backdrop: "linear-gradient(to right, #60C8B3, black)",
      })
      return;
    }
    const family = {
      name: Name,
      description: Description,
    }
    mutation.mutate(family)

  }
  return (
    <div>
      <h2>Registrar Familia</h2>
      <form onSubmit={handleSubmit} className='cont-form'>
        <div className='name'>

          <label htmlFor='name'> Nombre de la Familia: </label>
          <input type="text" name="name" required id="name" placeholder='Familia' value={Name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div className='form-row'>
          <div className="description">
            <label htmlFor='description'> Descripción:</label>
            <textarea name="description" required id='description' value={Description} onChange={(e) => setDescription(e.target.value)} />
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
