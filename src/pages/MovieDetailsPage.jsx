import { useEffect, useState } from "react";
import { fetchMovieDetails } from "../services/operations";
import { useLocation, useNavigate, useParams} from "react-router-dom";
import MovieInfo from "../components/MovieInfo/MovieInfo";
import Loader from "../components/Loader/Loader";

const MovieDetailsPage = () => {
  const [movieData, setMovieData] = useState(null);
  
const navigate = useNavigate();
  const { movieId } = useParams();
  const location = useLocation()
  const goBackBtn = location.state?.from || '/';

  useEffect(() => {
    (async () => {
      try {
        const data = await fetchMovieDetails(movieId);
        // console.log(data);

        setMovieData(data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [movieId]);

  const handleGoBack = () => {
    navigate(goBackBtn)
  }

  if (!movieData) {
    return (
      <div>
        <Loader />
      </div>
    );
  }



  return (
    <div>
      <button type="button" onClick={handleGoBack}>Go Back</button>
      <MovieInfo
        title={movieData.title}
        poster_path={movieData.poster_path}
        vote={movieData.vote_average}
        overview={movieData.overview}
        genres={movieData.genres}
        budget={movieData.budget}
      />
    </div>
  );
};

export default MovieDetailsPage;
