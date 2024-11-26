import React, { useState } from 'react';
import '../../Styles/Register.scss'
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { CreatePestData } from '../../Hooks/Pest';

const RegisterPest = () => {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState("https://www.comparapps.com/wp-content/uploads/2020/03/imagenes-para-paginas-web.png");
  const [Name, setName] = useState("");
  const [Description, setDescription] = useState("");
  const navigate = useNavigate();


  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result); // Establece la URL base64 para la previsualización
      };
      reader.readAsDataURL(file); // Convierte la imagen en base64
    }
  };

  const mutation = CreatePestData();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!Name || !Description || !image) {
      Swal.fire({
        title: 'Error al crear la enfermedad',
        icon: 'Error',
        confirmButtonColor: '#1B5091',
        // backdrop: "linear-gradient(to right, #60C8B3, black)",
      })
      return;
    }
    const pest = {
      name: Name,
      description: Description,
      image: image,
    }
    mutation.mutate(pest);
  }
  return (
    <div>
      <h2>Registrar Plaga</h2>
      <form onSubmit={handleSubmit} className='cont-form'>
        <div className='name'>
          <label htmlFor='name'>Nombre de la Peste:</label>
          <input type="text" name="name" required id='name' placeholder='Plaga' value={Name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div className='form-row'>
          <div className="description">
            <label htmlFor='description'>Descripción:</label>
            <textarea name="description" required id='name' placeholder='Aqui puede agregar informacion de la plaga.' value={Description} onChange={(e) => setDescription(e.target.value)}></textarea>
          </div>
          <div className="image">
            <label htmlFor='image'> Imagen:</label>
            <input type="file" accept="image/*" onChange={handleImageChange} />
            {preview && (
              <div>
                <p>Previsualización:</p>
                <img src={preview} alt="Previsualización" />
              </div>
            )}
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
