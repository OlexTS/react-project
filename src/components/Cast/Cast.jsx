import { useEffect, useState } from "react";
import { fetchMovieCredits } from "../../services/operations";
import { useParams } from "react-router-dom";
import { BASE_IMG_URL, DEFAULT_IMG_URL } from "../../services/variables";

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
  console.log(casts);

  return (
    <div>
      <ul>
        {casts?.map(({ id, character, name, profile_path }) => (
          <li key={id}>
            <img
              src={profile_path ? BASE_IMG_URL + profile_path : DEFAULT_IMG_URL}
              width={300}
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
