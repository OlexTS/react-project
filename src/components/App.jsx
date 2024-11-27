import { useEffect, useId, useState } from "react";
import ContactList from "./ContactList/ContactList";
import SearchBox from "./SearchBox/SearchBox";
import ContactForm from "./ContactForm/ContactForm";

const initialState = [
  { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
  { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
  { id: "id-3", name: "Eden Clements", number: "645-17-79" },
  { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
];

function App() {
  const [contacts, setContacts] = useState(() => {
    const items = JSON.parse(localStorage.getItem("contacts"));
    if (items.length === 0) {
      return initialState;
    }
    return items;
  });
  const [filter, setFilter] = useState("");
  const id = useId();

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const getFilteredContacts = () => {
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const changeFilter = (event) => {
    return setFilter(event.currentTarget.value);
  };

  const addContacts = (name, number) => {
    setContacts([{ id: id, name, number }, ...contacts]);
  };

  const deleteContact = (id) => {
    setContacts(contacts.filter((contact) => contact.id !== id));
  };

  return (
    <>
      <ContactForm onAddContacts={addContacts} />
      <SearchBox value={filter} onChange={changeFilter} />
      <ContactList contacts={getFilteredContacts()} onDelete={deleteContact} />
    </>
  );
}

export default App;

/**
 * First and second tasks
 */

// import { useEffect, useState } from "react";
// import Options from "./Options/Options";
// import Feedback from "./Feedback/Feedback";
// import Notification from "./Notification/Notification";

// // import userData from "../userData.json";
// // import friends from '../friends.json';
// // import transactions from '../transactions.json';
// // import Profile from "./Profile/Profile";
// // import FriendList from "./FriendList/FriendList";
// // import TransactionHistory from "./TransactionHistory/TransactionHistory";

// const initialState = {
//   good: 0,
//   neutral: 0,
//   bad: 0,
// };

// function App() {
//   // const { username, tag, stats, avatar, location } = userData;
//   const [feedbackType, setFeedbackType] = useState(() => {
//     const savedFeedback = localStorage.getItem("feedback");
//     if (savedFeedback) {
//       return JSON.parse(savedFeedback);
//     }
//     return initialState;
//   });

//   useEffect(() => {
//     localStorage.setItem("feedback", JSON.stringify(feedbackType));
//   }, [feedbackType]);

//   const { good, neutral, bad } = feedbackType;
//   const onUpdateFeedback = (feedback) => {
//     setFeedbackType({
//       ...feedbackType,
//       [feedback]: feedbackType[feedback] + 1,
//     });
//   };

//   const onReset = () => {
//     setFeedbackType({ ...feedbackType, good: 0, neutral: 0, bad: 0 });
//   };

//   const total = good + neutral + bad;

//   return (
//     <>
//       <h1>Sip Happens Café</h1>
//       <p>
//         Please leave your feedback about our service by selecting one of the
//         options below.
//       </p>
//       <Options
//         changeFeedback={setFeedbackType}
//         onUpdate={onUpdateFeedback}
//         total={total}
//         onReset={onReset}
//       />
//       {total ? (
//         <Feedback feedback={feedbackType} total={total} />
//       ) : (
//         <Notification />
//       )}
//       {/* <Profile
//         name={username}
//         tag={tag}
//         location={location}
//         image={avatar}
//         stats={stats}
//       />
//       <FriendList friends={friends}/>
//       <TransactionHistory items={transactions}/> */}
//     </>
//   );
// }

// export default App;
