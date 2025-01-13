import React from "react";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

function CartWidget() {
  const { cart } = useCart();

  const calculateTotalItems = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  const totalItems = calculateTotalItems();

  if (totalItems === 0) {
    return null; // Não exibe o widget se não houver itens no carrinho
  }

  return (
    <div className="cart-widget">
      <Link to="/cart">
        🛒 <span>{totalItems}</span>
      </Link>
    </div>
  );
}

export default CartWidget;
