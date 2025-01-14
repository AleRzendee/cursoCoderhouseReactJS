import React from 'react';
import Item from './Item';

function ItemList({ items }) {
  return (
    <div style={styles.listContainer}>
      {items.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </div>
  );
}

const styles = {
  listContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '20px',
  },
};

export default ItemList;