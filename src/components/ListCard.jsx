import React, { useState } from 'react';
import Card from './Card';
import { data as initialItems } from '../constants';

const ListCard = () => {
  const [items, setItems] = useState(initialItems);

  const handleAddItem = () => {
    setItems(items => [
      ...items,
      {
        id: items.length + 1,
        title: `${items.length + 1}th Card's h2`,
        subTitle: `${items.length + 1}th Card's h3`,
      },
    ]);
  };

  return (
    <>
      <header>
        <h2 style={{ marginBottom: '1rem' }}>Task: Add three card elements</h2>
      </header>
      <main>
        {items.map((item) => (
          <Card key={item.id} title={item.title} subTitle={item.subTitle} />
        ))}
        <button onClick={handleAddItem}>Tambah Item</button>
      </main>
    </>
  );
};

export default ListCard;
