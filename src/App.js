import { useEffect, useState } from "react";
import "./App.css";
import Card from "./components/Card/Card";
import Navbar from "./components/Navbar/Navbar";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#root");

function App() {
  const [guns, setGuns] = useState([]);
  const [cart, setCart] = useState([]);
  const [modalIsOpen, setIsOpen] = useState(false);

  console.log(cart);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const hadndleAddToCart = (gun) => {
    const newCart = [...cart, gun];
    // console.log(newCart);
    setCart(newCart);
  };

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setGuns(data));
  }, []);

  return (
    <div>
      <Navbar openModal={openModal} cart={cart}></Navbar>

      <div className="card-container">
        {guns.map((gun) => (
          <Card
            gun={gun}
            key={gun.id}
            hadndleAddToCart={hadndleAddToCart}
          ></Card>
        ))}
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <button onClick={closeModal}>close</button>
        <div>
          {cart.map((item) => (
            <h1 key={item.id}>{item.name}</h1>
          ))}
        </div>
      </Modal>
    </div>
  );
}

export default App;
