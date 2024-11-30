import toast from "react-hot-toast";

const SearchBar = ({ onSubmit}) => {
  const handleSubmit = (event) => {
    const { value } = event.target.elements.query;
    event.preventDefault();

    if (value.trim() === "") {
      toast.error("Please enter correct data");
      return;
    }
    onSubmit(value);
    // setQuery("");
  };

  // const handleChange = (event) => {
  //   setQuery(event.target.value);
  // };
  return (
    <header>
      <form onSubmit={handleSubmit}>
        <input
          name="query"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          // value={query}
          // onChange={handleChange}
        />
        <button type="submit">Search</button>
      </form>
    </header>
  );
};

export default SearchBar;
