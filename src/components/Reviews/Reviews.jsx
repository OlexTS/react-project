import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieReviews } from "../../services/operations";
import css from "./Reviews.module.css";

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
      <ul className={css.list}>
        {reviews?.map(({ id, author, content }) => (
          <li className={css.item} key={id}>
            <p className={css.author}><span className={css.span}>Author:</span> {author}</p>
            <p className={css.content}>{content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Reviews;
