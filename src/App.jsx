import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ItemDetail from "./components/ItemDetail";
import "./App.css";

function App() {
  const item = {
    name: "Produto X",
    price: 50,
    stock: 10,
  };

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<ItemDetail item={item} />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </Router>
  );
}

function Cart() {
  return (
    <div className="container">
      <h1>Carrinho</h1>
      <p>Bem-vindo ao seu carrinho de compras!</p>
    </div>
  );
}

export default App;
