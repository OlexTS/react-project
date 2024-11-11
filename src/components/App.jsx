import userData from "../userData.json";
import Profile from "./Profile/Profile";

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
    </>
  );
}

export default App;
