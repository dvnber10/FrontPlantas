import React, { useState } from 'react';
import '../../Styles/plants.scss'


const RegisterPlant = () => {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState("https://www.comparapps.com/wp-content/uploads/2020/03/imagenes-para-paginas-web.png");

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

  const handleSubmit = (event) => {
    event.preventDefault();
    if (image) {
      const formData = new FormData();
      formData.append('image', image);
      formData.append('name', event.target.name.value);
      formData.append('description', event.target.description.value);

      // Aquí iría la lógica para enviar `formData` al backend
      console.log('Datos enviados:', formData);
      alert('Planta registrada con éxito.');
    } else {
      alert('Por favor, sube una imagen.');
    }
  };

  
  const searchfamily = (data) => {
    console.log(data);

  };

  return (
    <div >
      <h2>Registrar Planta</h2>
      <form onSubmit={handleSubmit} className='cont-form' >
        <div className='name'>
          <label htmlFor='name'> Nombre de la Planta:</label>
          <input type="text" name="name" id='name' placeholder='Nombre' required />
        </div>
        <div className='form-row'>
          <div className="description">
            <label htmlFor='description'>Descripción:</label>
            <textarea id='description' name="description" placeholder='Aqui puedes agregar informacion basica de la planta.' required></textarea>
          </div>

          <div className="image">
            <label htmlFor='image'>Imagen:</label>
            <input type="file" id='image' accept="image/*" onChange={handleImageChange} />

            {preview && (
              <div>
                <p>Previsualización:</p>
                <img htmlFor='image' src={preview} alt="Previsualización" />
              </div>
            )}
          </div>

        </div>
        <div className="family">
          <h3>Familia</h3>
          <div className="caja-buscador">
            <div className="show-family">
              <spam>Aqui es donde se mostrara familia selecionada</spam>
            </div>
            <div className="search-family">
              {/* <label htmlFor="family">Busca familia de la planta</label> */}
              <input type="text" id='family' name="family" placeholder='Busca familia de la planta' required />
              <button type="button">Buscar</button>
              <div className="muestras">

              </div>
            </div>
          </div>

        </div>
        <div className="diseases">
          <h3>Enfermedades</h3>
          <div className="show-diseases">
            <div className="buscador">
              <div className="caja-search">
                <input type="text" id='disease' name="disease" placeholder='Busca enfermedad' required />
                <button type="button">Buscar</button>
              </div>
              <div className="muestras">
              </div>
            </div>
            <div className="Show-diseases">

            </div>
          </div>

        </div>


        <button type="submit" onClick={handleSubmit}>Registrar</button>
      </form>
    </div>
  );
};

export default RegisterPlant;
