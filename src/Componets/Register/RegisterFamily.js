import React, { useState } from 'react';

const RegisterFamily = () => {
  const [formData, setFormData] = useState({ familyName: '' });
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState("https://cdn-icons-png.flaticon.com/512/4131/4131883.png");

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
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
  const handleSubmit = () => {
    
  }
  return (
    <div>
      <h2>Registrar Familia</h2>
      <form onSubmit={handleSubmit} className='cont-form'>
        <div>
          <label>
            Nombre de la Familia:
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

export default RegisterFamily;
