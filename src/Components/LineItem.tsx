import { FaTrashAlt } from 'react-icons/fa';

type Props = {
  item: {
    id: number;
    checked: boolean;
    item: string;
  };
  handleCheck(id: number): void;
  handleDelete(id: number): void;
};

export const LineItem: React.FC<Props> = ({
  item,
  handleCheck,
  handleDelete,
}) => {
  return (
    <li className="item" key={item.id}>
      <input
        type="checkbox"
        onChange={() => handleCheck(item.id)}
        checked={item.checked}
      />
      <label
        style={
          item.checked
            ? { textDecoration: 'line-through' }
            : { textDecoration: 'none' }
        }
        onDoubleClick={() => handleCheck(item.id)}
      >
        {item.item}
      </label>
      <FaTrashAlt
        onClick={() => handleDelete(item.id)}
        role="button"
        tabIndex={0}
      />
    </li>
  );
};
