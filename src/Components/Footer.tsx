type Props = {
  length: number;
};

export const Footer: React.FC<Props> = ({ length }) => {
  return (
    <footer>
      <p>
        {length} List {length === 1 ? 'item' : 'items'}
      </p>
    </footer>
  );
};
