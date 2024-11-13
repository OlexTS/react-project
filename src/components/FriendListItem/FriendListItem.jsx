import PropTypes from "prop-types";
import { BsWifi, BsWifiOff } from "react-icons/bs";

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <div>
      <img src={avatar} alt="Avatar" width="48" />
      <p>{name}</p>
      {isOnline ? <BsWifi fill="green" /> : <BsWifiOff fill="red" />}
    </div>
  );
};

FriendListItem.propTypes= {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired
}

export default FriendListItem;
