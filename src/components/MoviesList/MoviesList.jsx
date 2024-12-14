import { NavLink, useLocation } from "react-router-dom";
import { BASE_IMG_URL, DEFAULT_IMG_URL } from "../../services/variables";

const MoviesList = ({ movies }) => {
  const location = useLocation()
  return (
    <>
      {" "}
      <ul>
        {movies.map(({ id, poster_path, original_title }) => (
          <li key={id}>
            <h2>{original_title}</h2>
            <NavLink to={`/movies/${id}`}  state={{ from: location}}>
              <img src={poster_path ? BASE_IMG_URL + poster_path : DEFAULT_IMG_URL} alt="movie" />
            </NavLink>
          </li>
        ))}
      </ul>
    </>
  );
};

export default MoviesList;
