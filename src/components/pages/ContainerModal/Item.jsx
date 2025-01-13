function Item({ item }) {
  return (
    <div style={styles.itemContainer}>
      <img src={item.pictureUrl} alt={item.title} style={styles.image} />
      <h3>{item.title}</h3>
      <p>{item.description}</p>
      <p>Preço: R$ {item.price}</p>
    </div>
  );
}

const styles = {
  itemContainer: {
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '16px',
    margin: '10px',
    textAlign: 'center',
    boxShadow: '0 2px 5px rgba(0,0,0,0.2)',
  },
  image: {
    width: '100px',
    height: '100px',
    objectFit: 'cover',
    marginBottom: '10px',
  },
};

export default Item;