import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieReviews } from "../../services/operations";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    (async () => {
      try {
        const data = await fetchMovieReviews(movieId);
        setReviews(data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [movieId]);

  if (!reviews.length) {
    return "This movie does not have any reviews";
  }
  
  return (
    <div>
      <ul>
        {reviews?.map(({ id, author, content }) => (
          <li key={id}>
            <p>Author: {author}</p>
            <p>{content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Reviews;
