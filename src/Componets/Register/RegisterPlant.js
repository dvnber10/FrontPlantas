import React, { useState } from 'react';


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
        <div className="diseases">
          <h3>Enfermedades</h3>

          <p>aqui voy a poner un componente que busque las enfermedades que atacan a la planta.</p>
        </div>


        <button type="submit">Registrar</button>
      </form>
    </div>
  );
};

export default RegisterPlant;
