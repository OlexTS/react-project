import { useEffect, useState } from "react";
import { fetchTrendingMovies } from "../services/operations";
import MoviesList from "../components/MoviesList/MoviesList";
import Loader from "../components/Loader/Loader";

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalMovies, setTotalMovies] = useState(0);

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        const data = await fetchTrendingMovies(page);
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
  }, [page]);

  return (
    <div>
      <h1>Trending movies today</h1>
     {isLoading ? <Loader/> : <MoviesList movies={movies} />} 
    </div>
  );
};

export default HomePage;
