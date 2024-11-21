import React, { useState } from 'react';
import RegisterPlant from '../Componets/Register/RegisterPlant';
import RegisterFamily from '../Componets/Register/RegisterFamily';
import RegisterDisease from '../Componets/Register/RegisterDesease';
import RegisterPest from '../Componets/Register/RegisterPest';
import Navbar from '../Componets/Navbar';
import '../Styles/Register.scss'

const NewRegister = () => {
  const [selectedForm, setSelectedForm] = useState(null);

  const handleCheckboxChange = (event) => {
    const { value } = event.target;
    setSelectedForm(value);
  };

  return (
    <div >
      <Navbar />

      <form className='cont-register'>
        <h2>Nuevo Registro</h2>
        <div >
          <label>
            <input className='checkbox'
              type="checkbox"
              value="plant"
              checked={selectedForm === 'plant'}
              onChange={handleCheckboxChange}
            />
            Planta
          </label>
          <label>
            <input className='checkbox'
              type="checkbox"
              value="family"
              checked={selectedForm === 'family'}
              onChange={handleCheckboxChange}
            />
            Familia
          </label>
          <label>
            <input className='checkbox'
              type="checkbox"
              value="disease"
              checked={selectedForm === 'disease'}
              onChange={handleCheckboxChange}
            />
            Enfermedad
          </label>
          <label>
            <input className='checkbox'
              type="checkbox"
              value="pest"
              checked={selectedForm === 'pest'}
              onChange={handleCheckboxChange}
            />
            Plaga
          </label>
        </div>

        <div>
          {selectedForm === 'plant' && <RegisterPlant />}
          {selectedForm === 'family' && <RegisterFamily />}
          {selectedForm === 'disease' && <RegisterDisease />}
          {selectedForm === 'pest' && <RegisterPest />}
        </div>
      </form>
    </div>
  );
};

export default NewRegister