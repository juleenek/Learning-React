import Header from './Components/Header';
import { useState } from 'react';
import { Content } from './Components/Content';
import { Footer } from './Components/Footer';

function App(): JSX.Element {
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

  const handleCheck = (id: number) => {
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
    <div className="App">
      <Header title="Grocery List" />
      <Content
        items={items}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />
      <Footer length={items.length} />
    </div>
  );
}

export default App;
