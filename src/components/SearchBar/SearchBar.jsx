import { useState } from "react";
import toast from "react-hot-toast";
import { BsSearch } from "react-icons/bs";
import css from './SearchBar.module.css'

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
    <header className={css.header}>
      <form className={css.form} onSubmit={handleSubmit}>
        <input
          name="query"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={inputValue}
          onChange={handleChange}
          className={css.input}
        />
        <button className={css.button} type="submit"> Search <BsSearch  size={32}/></button>
      </form>
    </header>
  );
};

export default SearchBar;
