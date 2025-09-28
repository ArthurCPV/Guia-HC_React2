// Card.tsx
import React from "react";

type CardProps = {
  title: string;
  subtitle: string;
  image: string;
  onClick?: () => void | Promise<void>;
  // add other props if needed
};

const Card: React.FC<CardProps> = ({ title, subtitle, image, onClick }) => {
  return (
    <div onClick={onClick} style={{ cursor: onClick ? "pointer" : "default" }}>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{subtitle}</p>
    </div>
  );
};

export default Card;