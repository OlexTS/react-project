import { NavLink, Outlet, useLocation } from "react-router-dom";
import { Suspense } from "react";
import { BASE_IMG_URL, DEFAULT_IMG_URL } from "../../services/variables";
import css from "./MovieInfo.module.css";

const MovieInfo = ({ title, poster_path, vote, overview, genres, budget }) => {
  const location = useLocation();

  return (
    <div>
      <div className={css.container}>
        <div>
          <img className={css.img}
            src={poster_path ? BASE_IMG_URL + poster_path : DEFAULT_IMG_URL}
          />
        </div>
        <div className={css.info}>
          <h2 className={css.title}>{title}</h2>
          <p className={css.text}>
            <span className={css.span}>Avarage vote:</span> {vote}
          </p>
          <p className={css.text}>
            <span className={css.span}>Overview:</span> {overview}
          </p>
          <p className={css.text}>
            <span className={css.span}>Budget:</span>{" "}
            {budget ? budget : "Unknown"}
          </p>
          <span className={css.span}>Genre:</span>
          <ul>
            {genres?.map((genre) => (
              <li key={genre.id}>{genre.name}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className={css.addit}>
        <h3 className={css.span}>Additional info</h3>
        <NavLink className={css.link} to="cast" state={{ from: location.state?.from || "/" }}>
          CAST
        </NavLink>
        <NavLink className={css.link} to="reviews" state={{ from: location.state?.from || "/" }}>
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
