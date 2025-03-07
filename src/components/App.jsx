import { useContext, useEffect, lazy } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
// import HomePage from "../pages/HomePage";
// import RegistrationPage from "../pages/RegistrationPage";
import Layout from "./Layout/Layout";
// import LoginPage from "../pages/LoginPage";
// import ContactsPage from "../pages/ContactsPage";
import { refreshUser } from "../redux/auth/authOps";
import useAuth from "../hooks/useAuth";
import PrivateRoute from "./PrivateRoute";
import RestrictedRoute from "./RestrictedRoute";
import { Toaster } from "react-hot-toast";
import { Box } from "@mui/material";
import { ThemeContext } from "../theme/themeContext";

const HomePage = lazy(()=>import('../pages/HomePage'));
const RegistrationPage = lazy(()=>import('../pages/RegistrationPage'));
const LoginPage = lazy(()=>import('../pages/LoginPage'));
const ContactsPage = lazy(()=>import('../pages/ContactsPage'));

function App() {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();
  const { isDarkMode } = useContext(ThemeContext);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);
  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundImage: `url(${
          isDarkMode
            ? "/images/blue-smooth-wall-textured-background.jpg"
            : "/images/pexels-tirachard-kumtanom-112571-733857.jpg"
        })`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Toaster />
      {!isRefreshing && (
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route
              path="/register"
              element={
                <RestrictedRoute
                  redirectTo="/login"
                  component={<RegistrationPage />}
                />
              }
            />
            <Route
              path="/login"
              element={
                <RestrictedRoute
                  redirectTo="/contacts"
                  component={<LoginPage />}
                />
              }
            />
            <Route
              path="/contacts"
              element={
                <PrivateRoute
                  redirectTo="/login"
                  component={<ContactsPage />}
                />
              }
            />
          </Route>
        </Routes>
      )}
    </Box>
  );
}

export default App;

/**
 *  Seven task
 */

// import { useEffect } from "react";
// import { useDispatch } from "react-redux";
// // import ContactList from "./ContactList/ContactList";
// // import SearchBox from "./SearchBox/SearchBox";
// // import ContactForm from "./ContactForm/ContactForm";
// // import { Toaster } from "react-hot-toast";
// import { fetchContacts } from "../redux//contacts/contactsOps";
// import RegistrationForm from "./RegistrationForm/RegistrationForm";
// import LoginForm from "./LoginForm/LoginForm";

// function App() {
//   const dispatch = useDispatch();
//   useEffect(()=>{
//     dispatch(fetchContacts())
//   },[dispatch])
//   return (
//     <>
//       {/* <ContactForm />
//       <SearchBox />
//       <ContactList />
//       <Toaster /> */}
//       <RegistrationForm/>
//       <LoginForm/>
//     </>
//   );
// }

/**
 * Sixth task
 */

// import ContactList from "./ContactList/ContactList";
// import SearchBox from "./SearchBox/SearchBox";
// import ContactForm from "./ContactForm/ContactForm";
// import { Toaster } from "react-hot-toast";

// function App() {
//   return (
//     <>
//       <ContactForm />
//       <SearchBox />
//       <ContactList />
//       <Toaster />
//     </>
//   );
// }

// export default App;

/**
 * Fifth task
 */

// import { Route, Routes } from "react-router-dom";
// import { Toaster } from "react-hot-toast";
// import HomePage from "../pages/HomePage";
// import MoviesPage from "../pages/MoviesPage";
// import MovieDetailsPage from "../pages/MovieDetailsPage";
// import NotFoundPage from "../pages/NotFoundPage";
// import Cast from "./Cast/Cast";
// import Reviews from "./Reviews/Reviews";
// import SharedLayout from "./SharedLayout/SharedLayout";

// function App() {

//   return (
//     <div>
//       <Routes>
//         <Route path="/" element={<SharedLayout />}>
//           <Route index element={<HomePage />} />
//           <Route path="movies" element={<MoviesPage />} />
//           <Route path="movies/:movieId" element={<MovieDetailsPage />}>
//             <Route path="cast" element={<Cast />} />
//             <Route path="reviews" element={<Reviews />} />
//           </Route>
//           <Route path="*" element={<NotFoundPage />} />
//         </Route>
//       </Routes>
//       <Toaster/>
//     </div>
//   );
// }

// export default App;

/**
 * Fourth task
 */

// import { useEffect, useRef, useState } from "react";
// import toast, { Toaster } from "react-hot-toast";

// import SearchBar from "./SearchBar/SearchBar";
// import ImageGallery from "./ImageGallery/ImageGallery";
// import searchImage from "../operations";
// import LoadMoreBtn from "./LoadMoreBtn/LoadMoreBtn";
// import Loader from "./Loader/Loader";
// import ImageModal from "./ImageModal/ImageModal";

// const App = () => {
//   const [query, setQuery] = useState("");
//   const [images, setImages] = useState([]);
//   const [page, setPage] = useState(1);
//   const [totalImages, setTotalImages] = useState(0);
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const [selectedImg, setSelectedImg] = useState(null);

//   const lastGroupRef = useRef(null)

//   useEffect(() => {
//     if (!query) return;
//     setIsLoading(true);
//     setError(null);
//     const fetchImages = async () => {
//       try {
//         const response = await searchImage(query, page);
//         setImages((prevImages) =>
//           page === 1
//             ? [...response.results]
//             : [...prevImages, ...response.results]
//         );
//         setTotalImages(response.total);
//         if (!response.total) {
//           return toast.error("Bad query");
//         }
//       } catch (error) {
//         setError(error);
//         toast.error("Something went wrong. Try again!");
//       } finally {
//         setIsLoading(false);

//       }
//     };

//     fetchImages();
//   }, [page, query]);

//   useEffect(() => {
//     if (lastGroupRef.current) {
//       lastGroupRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
//     }
//   }, [images]);

//   const onSearch = (query) => {
//     setQuery(query);
//     setPage(1);
//     setImages([]);
//   };

//   const loadNextPage = () => {
//     setPage((prevPage) => prevPage + 1);
//   };

//   const onOpenModal = (image) => {
//     setSelectedImg(image);
//     document.body.style.overflow = "hidden";
//   };
//   const onCloseModal = () => {
//     setSelectedImg(null);
//     document.body.style.overflow = "";
//   };

//   return (
//     <div aria-hidden={!!selectedImg} style={{position: 'relative', minHeight: '100vh'}}>
//       <SearchBar onSubmit={onSearch} setQuery={setQuery} query={query} />
//       <ImageGallery images={images} onImageClick={onOpenModal} />
//       <div ref={lastGroupRef}></div>
//       {isLoading ? (
//         <Loader />
//       ) : (
//         images.length !== 0 &&
//         images.length < totalImages && <LoadMoreBtn onLoadMore={loadNextPage} />
//       )}
//       {selectedImg && (
//         <ImageModal
//           isOpen={!!selectedImg}
//           onClose={onCloseModal}
//           imageUrl={selectedImg.cover_photo.urls.regular}
//           tag={selectedImg.tags.title}
//         />
//       )}
//       <Toaster />
//     </div>
//   );
// };

// export default App;

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
