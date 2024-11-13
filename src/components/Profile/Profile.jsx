import PropTypes from "prop-types";
import css from './Profile.module.css'

const Profile = ({
  name,
  tag,
  location,
  image,
  stats: { followers, views, likes },
}) => {
  return (
    <div className={css.container}>
      <div className={css.info}>
        <img className={css.image} src={image} alt="User photo" />
        <p>{name}</p>
        <p>{tag}</p>
        <p>{location}</p>
      </div>

      <ul className={css.list}>
        <li className={css.item}>
          <span className={css.subtitle}>Followers:</span>
          <span>{followers}</span>
        </li>
        <li className={css.item}>
          <span className={css.subtitle}>Views:</span>
          <span>{views}</span>
        </li>
        <li className={css.item}>
          <span className={css.subtitle}>Likes:</span>
          <span>{likes}</span>
        </li>
      </ul>
    </div>
  );
};

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};
export default Profile;
