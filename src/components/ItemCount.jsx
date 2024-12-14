import { useState } from "react";

const ItemCount = ({ stock, initial, onAdd }) => {
  
  const [count, setCount] = useState(initial || 1);
  const increment = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const decrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const handleAdd = () => {
    if (stock > 0) {
      onAdd(count);
    }
  };

  return (
    <div style={{ textAlign: "center", margin: "20px" }}>
      <h2>Contador de Itens</h2>
      <div style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
        <button onClick={decrement} disabled={count <= 1}>
          -
        </button>
        <span>{count}</span>
        <button onClick={increment} disabled={count >= stock}>
          +
        </button>
      </div>
      <div style={{ marginTop: "10px" }}>
        <button onClick={handleAdd} disabled={stock <= 0}>
          Adicionar ao Carrinho
        </button>
      </div>
    </div>
  );
};

export default ItemCount;
