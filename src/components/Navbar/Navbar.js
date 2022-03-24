import React from "react";
import "./Navbar.css";
import { BsFillCartFill } from "react-icons/bs";

const Navbar = ({ openModal, cart }) => {
  return (
    <nav className="navbar">
      <h1>kopa samsu store</h1>
      <div className="cart-counter" onClick={openModal}>
          <span>{cart.length}</span>
          <BsFillCartFill className="icon"></BsFillCartFill>
      </div>
    </nav>
  );
};

export default Navbar;
