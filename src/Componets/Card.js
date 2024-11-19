import React from "react";
import "../Styles/Card.scss"; // Archivo de estilos para las tarjetas

const Card = ({ name, description, image }) => {
  return (
    <div className="card">
      <img src={image} alt={name} className="card-image" />
      <div className="card-content">
        <h3 className="card-title">{name}</h3>
      </div>
    </div>
  );
};

export default Card;
