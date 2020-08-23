import React from "react";
import "./Card.css";
import rick from "../Images/rick.jpg";

const Card = (props) => {
  const { name, air_date, episode } = props;
  return (
    <div className="card-container">
      <div className="image-container">
        <img className="card-logo" src={rick} alt="Rick and morty" />
      </div>
      <div className="episode-details">
        <p className="name">{name}</p>
        <p className="episode-code">{episode}</p>
        <p className="air-date">{air_date}</p>
      </div>
    </div>
  );
};

export default Card;
