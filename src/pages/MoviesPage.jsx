import { useEffect, useState } from "react";
import SearchMovie from "../components/SearchMovie/SearchMovie";
import { useSearchParams } from "react-router-dom";
import { fetchSerchQuery } from "../services/operations";
import toast from "react-hot-toast";
import MoviesList from "../components/MoviesList/MoviesList";

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [totalMovies, setTotalMovies] = useState(0);
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get("query");

  useEffect(() => {
    if (!searchQuery) {
      return;
    }
    (async () => {
      try {
        setIsLoading(true);
        const data = await fetchSerchQuery(searchQuery, page);
        if (!data.results.length) {
          return toast.error("There are no movie found. Please try again");
        }

        setMovies((prevMovies) =>
          page === 1 ? data.results : [...prevMovies, ...data.results]
        );
        setTotalMovies(data.total_results);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [page, searchQuery]);

  const handleSearch = (query) => {
    setSearchParams({ query });
  };

  return (
    <div>
      <SearchMovie onSubmit={handleSearch} />
      <MoviesList movies={movies}/>
    </div>
  );
};

export default MoviesPage;
