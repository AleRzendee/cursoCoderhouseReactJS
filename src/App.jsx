import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ItemDetail from "./components/ItemDetail";
import { CartProvider } from "./context/CartContext";
import "./App.css";

function App() {
  const item = {
    id: 1,  
    name: "Produto X",
    price: 50,
    stock: 10,
  };

  return (
    <CartProvider>
      <Router>
        <Routes>
          <Route path="/" element={<ItemDetail item={item} />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

function Cart() {
  return (
    <div className="container">
      <h1>Carrinho</h1>
      <p>Aqui estarão os itens adicionados ao carrinho!</p>
    </div>
  );
}

export default App;
