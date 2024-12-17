import React, { useEffect, useState } from 'react';
import ItemList from './ItemList';

function ItemListContainer() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const mockData = [
      {
        id: 1,
        title: 'Produto 1',
        description: 'Descrição do Produto 1',
        price: 100,
        pictureUrl: 'https://via.placeholder.com/100',
      },
      {
        id: 2,
        title: 'Produto 2',
        description: 'Descrição do Produto 2',
        price: 200,
        pictureUrl: 'https://via.placeholder.com/100',
      },
      {
        id: 3,
        title: 'Produto 3',
        description: 'Descrição do Produto 3',
        price: 300,
        pictureUrl: 'https://via.placeholder.com/100',
      },
    ];

    // PROMISE
    const fetchItems = new Promise((resolve) => {
      setTimeout(() => {
        resolve(mockData);
      }, 2 * 1000);
    });

    fetchItems
      .then((data) => {
        setItems(data);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h2 style={{ textAlign: 'center' }}>Lista de Produtos</h2>
      {loading ? <p style={{ textAlign: 'center' }}>Carregando...</p> : <ItemList items={items} />}
    </div>
  );
}

export default ItemListContainer;
