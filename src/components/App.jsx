import userData from "../userData.json";
import friends from '../friends.json'
import Profile from "./Profile/Profile";
import FriendList from "./FriendList/FriendList";

function App() {
  const { username, tag, stats, avatar, location } = userData;
  return (
    <>
      <Profile
        name={username}
        tag={tag}
        location={location}
        image={avatar}
        stats={stats}
      />
      <FriendList friends={friends}/>
    </>
  );
}

export default App;
