import { NavLink, useLocation } from "react-router-dom";
import { BASE_IMG_URL, DEFAULT_IMG_URL } from "../../services/variables";
import css from "./MoviesList.module.css";

const MoviesList = ({ movies, lastMovieRef }) => {
  const location = useLocation();
  return (
    <>
      <ul className={css.list}>
        {movies.map(({ id, poster_path, original_title }, index) => (
          <li
            key={id}
            ref={index === movies.length - 1 ? lastMovieRef : null}
            className={css.item}
          >
            <h2>{original_title}</h2>
            <NavLink to={`/movies/${id}`} state={{ from: location }}>
              <img
                className={css.image}
                src={poster_path ? BASE_IMG_URL + poster_path : DEFAULT_IMG_URL}
                alt={original_title || "No title available"}
              />
            </NavLink>
          </li>
        ))}
      </ul>
    </>
  );
};

export default MoviesList;
