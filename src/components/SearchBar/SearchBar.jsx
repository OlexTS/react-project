const SearchBar = ({ onSubmit }) => {
  const handleSubmit = (event) => {
    const { value } = event.target.elements.query;
    event.preventDefault();
    onSubmit(value);
  };
  return (
    <header>
      <form onSubmit={handleSubmit}>
        <input
          name="query"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button type="submit">Search</button>
      </form>
    </header>
  );
};

export default SearchBar;
