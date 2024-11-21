import React, { useState } from 'react';

const RegisterDisease = () => {
  const [formData, setFormData] = useState({ diseaseName: '' });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    
  }

  return (
    <div>
    <h2>Registrar Enfermedad</h2>
    <form onSubmit={handleSubmit} className='cont-form'>
      <div>
        <label>
          Nombre de la Emfermedad:
          <input type="text" name="name" required />
        </label>
      </div>
      <div>
        <label>
          Descripción:
          <textarea name="description" required></textarea>
        </label>
      </div>
      <button type="submit">Registrar</button>
    </form>
  </div>
  );
};

export default RegisterDisease;
