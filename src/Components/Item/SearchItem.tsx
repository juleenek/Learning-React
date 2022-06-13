type Props = {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
};

export const SearchItem: React.FC<Props> = ({ search, setSearch }) => {
  return (
    <form className='searchForm' onSubmit={(e) => e.preventDefault()}>
      <label htmlFor='search'>Search</label>
      <input
        id='search'
        type='text'
        role='searchbox'
        placeholder='Search Items'
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </form>
  );
};
