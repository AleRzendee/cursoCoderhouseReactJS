import styles from './ItemDetail.module.css'; 

function ItemDetail({ item }) {
  return (
    <div className={styles.container}>
      <img src={item.imageUrl} alt={item.title} className={styles.image} />
      <div className={styles.details}>
        <h2 className={styles.title}>{item.title}</h2>
        <p className={styles.description}>{item.description}</p>
        <p className={styles.price}>R$ {item.price.toFixed(2)}</p>
        <button className={styles.button}>Adicionar ao Carrinho</button>
      </div>
    </div>
  );
}

export default ItemDetail;
