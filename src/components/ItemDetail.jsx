import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ItemCount from "./ItemCount";

function ItemDetail({ item }) {
  const [quantityToAdd, setQuantityToAdd] = useState(null);
  const navigate = useNavigate();

  const handleAdd = (quantity) => {
    setQuantityToAdd(quantity);
  };

  const handleGoToCart = () => {
    navigate("/cart");
  };

  return (
    <div className="container">
      <div className="item-detail">
        <h1>Detalhes do Item</h1>
        <p>{item.name}</p>
        <p>Preço: R${item.price}</p>
        <p>Estoque: {item.stock}</p>
        {quantityToAdd === null ? (
          <ItemCount stock={item.stock} initial={1} onAdd={handleAdd} />
        ) : (
          <div>
            <p>Você adicionou {quantityToAdd} itens ao carrinho.</p>
            <button onClick={handleGoToCart}>Finalizar Compra</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default ItemDetail;
