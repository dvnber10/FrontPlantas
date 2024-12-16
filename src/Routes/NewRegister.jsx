import React, { useState } from 'react';
import RegisterPlant from '../Componets/Register/RegisterPlant';
import RegisterFamily from '../Componets/Register/RegisterFamily';
import RegisterDisease from '../Componets/Register/RegisterDesease';
import RegisterPest from '../Componets/Register/RegisterPest';
import '../Styles/Register.scss'

const NewRegister = () => {
  const [selectedForm, setSelectedForm] = useState('plant');

  const handleCheckboxChange = (event) => {
    const { value } = event.target;
    setSelectedForm(value);
  };

  return (
    <div className='conteiner'>
      <div className='cont-register'>
        <h2>Nuevo Registro</h2>
        <div className='options'>
          <div className="item">
            <input className='checkbox' id="plant" name='radio' type="radio" value="plant" checked={selectedForm === 'plant'} onChange={handleCheckboxChange} />
            <label for='plant'> Planta</label>
          </div>

          <div className="item">
            <input className='checkbox' name='radio' type="radio" id='family' value="family" checked={selectedForm === 'family'} onChange={handleCheckboxChange} />
            <label for="family"> Familia</label>
          </div>
          <div className="item">
            <input className='checkbox' name='radio' type="radio" id='disease' value="disease" checked={selectedForm === 'disease'} onChange={handleCheckboxChange} />
            <label for='disease'> Enfermedad</label>
          </div>
          <div className="item">
            <input className='checkbox' name='radio' type="radio" id='plague' value="pest" checked={selectedForm === 'pest'} onChange={handleCheckboxChange} />
            <label for='plague'> Plaga</label>
          </div>
        </div>

        <div>
          {selectedForm === 'plant' && <RegisterPlant />}
          {selectedForm === 'family' && <RegisterFamily />}
          {selectedForm === 'disease' && <RegisterDisease />}
          {selectedForm === 'pest' && <RegisterPest />}
        </div>
      </div>
    </div>
  );
};

export default NewRegister