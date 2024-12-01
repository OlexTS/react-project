import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";

import SearchBar from "./SearchBar/SearchBar";
import ImageGallery from "./ImageGallery/ImageGallery";
import searchImage from "../operations";
import LoadMoreBtn from "./LoadMoreBtn/LoadMoreBtn";
import Loader from "./Loader/Loader";
import ImageModal from "./ImageModal/ImageModal";

const App = () => {
  const [query, setQuery] = useState("");
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [totalImages, setTotalImages] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedImg, setSelectedImg] = useState(null);

  useEffect(() => {
    if (!query) return;
    setIsLoading(true);
    setError(null);
    const fetchImages = async () => {
      try {
        const response = await searchImage(query, page);
        setImages((prevImages) =>
          page === 1
            ? [...response.results]
            : [...prevImages, ...response.results]
        );
        setTotalImages(response.total);
        if (!response.total) {
          return toast.error("Bad query");
        }
      } catch (error) {
        setError(error);
        toast.error("Something went wrong. Try again!");
      } finally {
        setIsLoading(false);
      }
    };
    fetchImages();
  }, [page, query, error]);

  const onSearch = (query) => {
    setQuery(query);
    setPage(1);
    setImages([]);
  };

  const loadNextPage = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const onOpenModal = (image) => {
    setSelectedImg(image);
    document.body.style.overflow = "hidden";
  };
  const onCloseModal = () => {
    setSelectedImg(null);
    document.body.style.overflow = "";
  };

  return (
    <div aria-hidden={!!selectedImg}>
      <SearchBar onSubmit={onSearch} setQuery={setQuery} query={query} />
      <ImageGallery images={images} onImageClick={onOpenModal} />
      {isLoading ? (
        <Loader />
      ) : (
        images.length !== 0 &&
        images.length < totalImages && <LoadMoreBtn onLoadMore={loadNextPage} />
      )}
      {selectedImg && (
        <ImageModal
          isOpen={!!selectedImg}
          onClose={onCloseModal}
          imageUrl={selectedImg.cover_photo.urls.regular}
          tag={selectedImg.tags.title}
        />
      )}
      <Toaster />
    </div>
  );
};

export default App;

/**
 * Third task
 */

// import { useEffect, useId, useState } from "react";
// import ContactList from "./ContactList/ContactList";
// import SearchBox from "./SearchBox/SearchBox";
// import ContactForm from "./ContactForm/ContactForm";

// const initialState = [
//   { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
//   { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
//   { id: "id-3", name: "Eden Clements", number: "645-17-79" },
//   { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
// ];

// function App() {
//   const [contacts, setContacts] = useState(() => {
//     const items = JSON.parse(localStorage.getItem("contacts"));
//     if (items.length === 0) {
//       return initialState;
//     }
//     return items;
//   });
//   const [filter, setFilter] = useState("");
//   const id = useId();

//   useEffect(() => {
//     localStorage.setItem("contacts", JSON.stringify(contacts));
//   }, [contacts]);

//   const getFilteredContacts = () => {
//     return contacts.filter((contact) =>
//       contact.name.toLowerCase().includes(filter.toLowerCase())
//     );
//   };

//   const changeFilter = (event) => {
//     return setFilter(event.currentTarget.value);
//   };

//   const addContacts = (name, number) => {
//     setContacts([{ id: id, name, number }, ...contacts]);
//   };

//   const deleteContact = (id) => {
//     setContacts(contacts.filter((contact) => contact.id !== id));
//   };

//   return (
//     <>
//       <ContactForm onAddContacts={addContacts} />
//       <SearchBox value={filter} onChange={changeFilter} />
//       <ContactList contacts={getFilteredContacts()} onDelete={deleteContact} />
//     </>
//   );
// }

// export default App;

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
