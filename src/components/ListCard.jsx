import React, { useState } from 'react';
import Card from './Card';
import { data } from '../constants';

const ListCard = () => {
  const [tasks, setTasks] = useState(data);

  const handleAddTask = () => {
    setTasks([
      ...tasks,
      {
        id: tasks.length + 1,
        title: `${tasks.length + 1}th Card's h2`,
        subTitle: `${tasks.length + 1}th Card's h3`,
      },
    ]);
  };

  return (
    <>
      <header>
        <h2 style={{ marginBottom: '1rem' }}>Task: Add three card elements</h2>
      </header>
      <main>
        {tasks.map((item) => (
          <Card key={item.id} title={item.title} subTitle={item.subTitle} />
        ))}
        <button onClick={() => handleAddTask()}>Add New Card</button>
      </main>
    </>
  );
};

export default ListCard;
