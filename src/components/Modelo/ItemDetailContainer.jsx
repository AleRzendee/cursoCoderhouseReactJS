import { useState, useEffect } from 'react';
import ItemDetail from './ItemDetail';
import styles from './ItemDetailContainer.module.css';

const getItem = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        id: 1,
        title: 'A15',
        description: 'O melhor smartphone de 2024',
        price: 1109.99,
        imageUrl: 'https://mirandacomputacao.jetassets.com.br/produto/48199-principal.png', 
      });
    }, 2000);
  });
};

function ItemDetailContainer() {
  const [item, setItem] = useState(null);

  useEffect(() => {
    getItem()
      .then((item) => {
        setItem(item);
      })
      .catch((error) => console.error('Erro ao buscar item:', error));
  }, []);

  return (
    <div className={styles.container}>
      {item ? (
        <ItemDetail item={item} />
      ) : (
        <p className={styles.loading}>Carregando detalhes do produto...</p>
      )}
    </div>
  );
}

export default ItemDetailContainer;
