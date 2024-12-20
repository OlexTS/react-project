import { useEffect, useRef, useState } from "react";
import SearchMovie from "../components/SearchMovie/SearchMovie";
import { useSearchParams } from "react-router-dom";
import ScrollToTop from "react-scroll-to-top";
import { fetchSerchQuery } from "../services/operations";
import toast from "react-hot-toast";
import MoviesList from "../components/MoviesList/MoviesList";
import LoadMoreBtn from "../components/LoadMoreBtn/LoadMoreBtn";
import Loader from "../components/Loader/Loader";

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [totalMovies, setTotalMovies] = useState(0);
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get("query");

  const lastMovieRef = useRef(null);

  // Завантаження фільмів за запитом
  useEffect(() => {
    if (!searchQuery) {
      setMovies([]); // Очистка списку, якщо запит порожній
      return;
    }
    (async () => {
      try {
        setIsLoading(true);
        const data = await fetchSerchQuery(searchQuery, page);
        if (!data.results.length) {
          return toast.error("There are no movies found. Please try again.");
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

  // Прокрутка до останнього завантаженого елемента
  useEffect(() => {
    if(page===1){
      return
    }
    if (!isLoading && lastMovieRef.current) {
      lastMovieRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, [movies, isLoading, page]);

  const onLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const handleSearch = (query) => {
    setSearchParams({ query });
    setPage(1); // Скидання сторінки при новому пошуковому запиті
    setMovies([]); // Очистка списку фільмів
  };

  const shouldShowLoadMore =
  !isLoading && movies.length > 0 && movies.length < totalMovies;

  return (
    <div>
      <SearchMovie onSubmit={handleSearch} />
      {movies.length > 0 && (
        <MoviesList movies={movies} lastMovieRef={lastMovieRef} />
      )}
      <ScrollToTop smooth='true' color="#c59292"/>
      {isLoading && <Loader/>} 
      {shouldShowLoadMore  && 
        <LoadMoreBtn onLoadMore={onLoadMore} />
      }
    </div>
  );
};

export default MoviesPage;