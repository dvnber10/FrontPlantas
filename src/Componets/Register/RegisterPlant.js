import React, { useState } from 'react';


const RegisterPlant = () => {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState("https://cdn-icons-png.flaticon.com/512/4131/4131883.png");

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
        <div>
          <label>
            Nombre de la Planta:
            <input type="text" name="name" required />
          </label>
        </div>
        <div className='form-row'>
          <label>
            Descripción:
            <textarea name="description" required></textarea>
          </label>
          <label>
            Imagen:
            <input type="file" accept="image/*" onChange={handleImageChange} />
            {preview && (
              <div>
                <p>Previsualización:</p>
                <img src={preview} alt="Previsualización" style={{ width: '200px', height: 'auto' }} />
              </div>
            )}
          </label>

        </div>

        <button type="submit">Registrar</button>
      </form>
    </div>
  );
};

export default RegisterPlant;
