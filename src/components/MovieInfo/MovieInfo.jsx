import { BASE_IMG_URL, DEFAULT_IMG_URL } from "../../services/variables";

const MovieInfo = ({ title, poster_path, vote, overview, genres, budget }) => {
  return (
    <div>
      <div>
        <img src={poster_path ? BASE_IMG_URL + poster_path : DEFAULT_IMG_URL} />
      </div>
      <div>
        <h1>{title}</h1>
        <p>Avarage vote {vote}</p>
        <p>Overview {overview}</p>
        <p>Budget {budget}</p>
        <ul>
          {genres.map((genre) => (
            <li key={genre.id}>{genre.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MovieInfo;
