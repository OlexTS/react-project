import userData from "../userData.json";
import friends from '../friends.json';
import transactions from '../transactions.json';
import Profile from "./Profile/Profile";
import FriendList from "./FriendList/FriendList";
import TransactionHistory from "./TransactionHistory/TransactionHistory";

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
      <TransactionHistory items={transactions}/>
    </>
  );
}

export default App;
