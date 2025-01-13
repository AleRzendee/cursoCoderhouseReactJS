import React from "react";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

function Cart() {
  const { cart, removeItem, clear } = useCart();

  const calculateTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  if (cart.length === 0) {
    return (
      <div className="container">
        <h1>Carrinho</h1>
        <p>Não há itens no seu carrinho.</p>
        <Link to="/" className="btn btn-primary">
          Voltar para a loja
        </Link>
      </div>
    );
  }

  return (
    <div className="container">
      <h1>Seu Carrinho</h1>
      <ul>
        {cart.map((item) => (
          <li key={item.id} className="cart-item">
            <div>
              <h3>{item.name}</h3>
              <p>Preço: R${item.price}</p>
              <p>Quantidade: {item.quantity}</p>
            </div>
            <button onClick={() => removeItem(item.id)} className="btn btn-danger">
              Remover
            </button>
          </li>
        ))}
      </ul>
      <div className="cart-summary">
        <h2>Total: R${calculateTotalPrice()}</h2>
        <button onClick={clear} className="btn btn-secondary">
          Limpar Carrinho
        </button>
        <button className="btn btn-success">Finalizar Compra</button>
      </div>
    </div>
  );
}

export default Cart;
