import React from "react";
import ItemCount from "./components/ItemCount";

function App() {
  const handleAddToCart = (quantity) => {
    alert(`Você adicionou ${quantity} itens ao carrinho.`);
  };

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Loja Online</h1>
      <ItemCount stock={5} initial={1} onAdd={handleAddToCart} />
    </div>
  );
}

export default App;
