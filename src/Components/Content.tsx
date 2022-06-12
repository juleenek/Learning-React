import { ItemList } from './ItemList';

type Props = {
  items: {
    id: number;
    checked: boolean;
    item: string;
  }[];
  handleCheck(id: number): void;
  handleDelete(id: number): void;
};

export const Content: React.FC<Props> = ({
  items,
  handleCheck,
  handleDelete,
}) => {
  return (
    <main>
      {items.length ? (
        <ItemList
          items={items}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
        />
      ) : (
        <p style={{ marginTop: '2rem' }}>Your list is empty!</p>
      )}
    </main>
  );
};
