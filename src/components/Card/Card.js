import React from "react";
import "./Card.css";
import { BsFillCartFill } from "react-icons/bs";

const Card = ({gun, hadndleAddToCart}) => {
  const { img, name, bullet, capacity, action, price } = gun;

  return (
    <div className="card">
      <div className="image-container">
        <img src={img} alt="" />
      </div>
      <div className="gun-info">
        <h1>{name}</h1>
        <p>Bullet Type: {bullet}</p>
        <p>Capacity: {capacity}</p>
        <p>Action: {action}</p>
      </div>
      <div className="add-to-cart">
        <button onClick={() => hadndleAddToCart(gun)}>
          <BsFillCartFill className="icon"></BsFillCartFill>
        </button>
        <h1>{price}</h1>
      </div>
    </div>
  );
};

export default Card;
