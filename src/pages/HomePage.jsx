import { useEffect, useRef, useState } from "react";
import { fetchTrendingMovies } from "../services/operations";
import MoviesList from "../components/MoviesList/MoviesList";
import Loader from "../components/Loader/Loader";
import LoadMoreBtn from "../components/LoadMoreBtn/LoadMoreBtn";

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalMovies, setTotalMovies] = useState(0);

  const lastMovieRef = useRef(null); // Референс для останнього елемента

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

  useEffect(() => {
    if (!isLoading && lastMovieRef.current) {
      lastMovieRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, [movies, isLoading]);

  const onLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <div>
      <h1>Trending movies today</h1>
      {isLoading && <Loader />}
      <MoviesList movies={movies} lastMovieRef={lastMovieRef} />
      {movies.length < totalMovies && <LoadMoreBtn onLoadMore={onLoadMore} />}
    </div>
  );
};

export default HomePage;