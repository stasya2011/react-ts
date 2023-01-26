import React from "react";
import { ICard } from "../../types/types";
import "./card.scss";

const Card: React.FC<{ element: ICard }> = ({ element }) => {
  const {
    name,
    description,
    thumbnail: { path, extension },
  } = element;
  const src = `${path}.${extension}`;
  return (
    <div className="card">
      <div className="card--wrapper">
        <img src={src} alt={name} />
      </div>
      <h2>{name}</h2>
      <p>{description ? description : "No description"}</p>
    </div>
  );
};

export default Card;
