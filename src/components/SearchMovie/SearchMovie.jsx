import { useState } from "react";
import toast from "react-hot-toast";

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
    onSubmit(query)
    setQuery("");
  };

  
  return (
    <div>
      <h2>Search Movies</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          autoComplete="off"
          value={query}
          onChange={handleChange}
          autoFocus
          placeholder="Please enter movie's name"
        />
      <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default SearchMovie;
