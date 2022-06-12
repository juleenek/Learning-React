import { useState } from 'react';
import { FaTrashAlt } from 'react-icons/fa';

export const Content = () => {
  const [items, setItems] = useState([
    {
      id: 1,
      checked: false,
      item: 'Item 1',
    },
    {
      id: 2,
      checked: false,
      item: 'Item 2',
    },
    {
      id: 3,
      checked: false,
      item: 'Item 3',
    },
  ]);

  const hendleCheck = (id: number) => {
    const listItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setItems(listItems);
    localStorage.setItem('bloglist', JSON.stringify(listItems));
  };

  const handleDelete = (id: number) => {
    const listItems = items.filter((item) => item.id !== id);
    setItems(listItems);
    localStorage.setItem('bloglist', JSON.stringify(listItems));
  };

  return (
    <main>
      {items.length ? (
        <ul>
          {items.map((item) => (
            <li className="item" key={item.id}>
              <input
                type="checkbox"
                onChange={() => hendleCheck(item.id)}
                checked={item.checked}
              />
              <label
                style={
                  item.checked
                    ? { textDecoration: 'line-through' }
                    : { textDecoration: 'none' }
                }
                onDoubleClick={() => hendleCheck(item.id)}
              >
                {item.item}
              </label>
              <FaTrashAlt
                onClick={() => handleDelete(item.id)}
                role="button"
                tabIndex={0}
              />
            </li>
          ))}
        </ul>
      ) : (
        <p style={{ marginTop: '2rem' }}>Your list is empty!</p>
      )}
    </main>
  );
};
