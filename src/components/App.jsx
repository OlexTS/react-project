import { useState } from "react";
import Options from "./Options/Options";
import Feedback from "./Feedback/Feedback";
import Notification from "./Notification/Notification";

// import userData from "../userData.json";
// import friends from '../friends.json';
// import transactions from '../transactions.json';
// import Profile from "./Profile/Profile";
// import FriendList from "./FriendList/FriendList";
// import TransactionHistory from "./TransactionHistory/TransactionHistory";

const initialState = {
  good: 0,
  neutral: 0,
  bad: 0,
};

function App() {
  // const { username, tag, stats, avatar, location } = userData;
  const [feedbackType, setFeedbackType] = useState(initialState);

  const { good, neutral, bad } = feedbackType;
  const onUpdateFeedback = (feedback) => {
    setFeedbackType({
      ...feedbackType,
      [feedback]: feedbackType[feedback] + 1,
    });
  };

  const onReset=() => {
setFeedbackType({...feedbackType, good: 0, neutral: 0, bad: 0})
  }

  const total = good + neutral + bad;

  return (
    <>
      <h1>Sip Happens Café</h1>
      <p>
        Please leave your feedback about our service by selecting one of the
        options below.
      </p>
      <Options changeFeedback={setFeedbackType} onUpdate={onUpdateFeedback} total={total} onReset={onReset}/>
      {total ? (
        <Feedback feedback={feedbackType} total={total} />
      ) : (
        <Notification />
      )}
      {/* <Profile
        name={username}
        tag={tag}
        location={location}
        image={avatar}
        stats={stats}
      />
      <FriendList friends={friends}/>
      <TransactionHistory items={transactions}/> */}
    </>
  );
}

export default App;
