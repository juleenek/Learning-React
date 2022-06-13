import { LineItem } from './LineItem';

type Props = {
  items: {
    id: number;
    checked: boolean;
    item: string;
  }[];
  handleCheck(id: number): void;
  handleDelete(id: number): void;
};

export const ItemList: React.FC<Props> = ({
  items,
  handleCheck,
  handleDelete,
}) => {
  return (
    <ul>
      {items.map((item) => (
        <LineItem
          key={item.id}
          item={item}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
        />
      ))}
    </ul>
  );
};
