import { NavLink, Outlet, useLocation } from "react-router-dom";
import { BASE_IMG_URL, DEFAULT_IMG_URL } from "../../services/variables";
import { Suspense } from "react";

const MovieInfo = ({ title, poster_path, vote, overview, genres, budget }) => {
  const location = useLocation();

  return (
    <div>
      <div>
        <img src={poster_path ? BASE_IMG_URL + poster_path : DEFAULT_IMG_URL} />
      </div>
      <div>
        <h2>{title}</h2>
        <p>Avarage vote {vote}</p>
        <p>Overview {overview}</p>
        <p>Budget {budget}</p>
        <ul>
          {genres?.map((genre) => (
            <li key={genre.id}>{genre.name}</li>
          ))}
        </ul>
      </div>
      <div>
        <h3>Additional info</h3>
        <NavLink to="cast" state={{ from: location.state?.from || "/" }}>
          CAST
        </NavLink>
        <NavLink to="reviews" state={{ from: location.state?.from || "/" }}>
          REVIEWS
        </NavLink>
      </div>
      <Suspense>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default MovieInfo;
