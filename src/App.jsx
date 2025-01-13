import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ItemDetail from "./components/ItemDetail";
import Cart from "./components/Cart";
import CartWidget from "./components/CartWidget";
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
        <header className="header">
          <CartWidget />
        </header>
        <Routes>
          <Route path="/" element={<ItemDetail item={item} />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
