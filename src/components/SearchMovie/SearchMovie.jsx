import { useState } from "react";
import toast from "react-hot-toast";
import css from "./SearchMovie.module.css";

const SearchMovie = ({ onSubmit }) => {
  const [query, setQuery] = useState("");

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (query.trim() === "") {
      toast.error("Please enter a valid query");
    }
    onSubmit(query);
    setQuery("");
  };

  return (
    <div className={css.container}>
      <form onSubmit={handleSubmit}>
        <input
          className={css.input}
          type="text"
          autoComplete="off"
          value={query}
          onChange={handleChange}
          autoFocus
          placeholder="Please enter movie's name"
        />
        <button type="submit" className={css.button}>
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchMovie;
