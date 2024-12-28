import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieCredits } from "../../services/operations";
import { BASE_IMG_URL, DEFAULT_IMG_URL } from "../../services/variables";
import css from "./Cast.module.css";

const Cast = () => {
  const [casts, setCasts] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    (async () => {
      try {
        const data = await fetchMovieCredits(movieId);
        setCasts(data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [movieId]);

  if (!casts.length) {
    return "This movie does not have any cast";
  }

  return (
    <div className={css.container}>
      <ul className={css.list}>
        {casts?.map(({ id, character, name, profile_path }) => (
          <li key={id}>
            <img
              className={css.img}
              src={profile_path ? BASE_IMG_URL + profile_path : DEFAULT_IMG_URL}
              width={200}
              alt="photo"
            />
            <p>{name}</p>
            <p>{character}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cast;
