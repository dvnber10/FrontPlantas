import React from "react";
import "../Styles/Card.scss"; // Archivo de estilos para las tarjetas
import { useNavigate } from "react-router-dom";

const Card = ({id, name, image }) => {
    const navigate = useNavigate();
    const Clicked = () => {
        navigate(`/Plant/${id}`)
    }
  return (
    <div className="card" onClick={Clicked}>
      <img src={image} alt={name} className="card-image" />
      <div className="card-content">
        <h3 className="card-title">{name}</h3>
      </div>
    </div>
  );
};

export default Card;
