import { BASE_IMG_URL } from "../../services/variables";

const MoviesList = ({ movies }) => {
  
  return (
    <>
      {" "}
      <h1>This title is about trending movies</h1>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            <h2>{movie.original_title}</h2>
            <img src={`${BASE_IMG_URL}${movie.backdrop_path}`} alt="" />
          </li>
        ))}
      </ul>
    </>
  );
};

export default MoviesList;
