const SearchBox = ({ onChange, value }) => {
  return (
    <>
      <label htmlFor="filter">Find contacts by name</label>
      <input type="text" id="filter" value={value} onChange={onChange} />
    </>
  );
};

export default SearchBox;
