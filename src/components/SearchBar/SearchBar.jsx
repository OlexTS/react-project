import { useState } from "react";
import toast from "react-hot-toast";

const SearchBar = ({ onSubmit }) => {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!inputValue.trim()) {
      toast.error("Please enter correct data");
      return;
    }
    onSubmit(inputValue);
    setInputValue("");
  };

  const handleChange = (event) => {
    setInputValue(event.target.value);
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
          value={inputValue}
          onChange={handleChange}
        />
        <button type="submit">Search</button>
      </form>
    </header>
  );
};

export default SearchBar;
