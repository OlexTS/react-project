import { combineReducers, configureStore } from "@reduxjs/toolkit";

import { contactsReducer } from "./contacts/contactsSlice";
import { filterReducer } from "./filters/filterSlice";
import { authReducer } from "./auth/authSlice.js";

const rootReducer = combineReducers({
  auth: authReducer,
  contacts: contactsReducer,
  filter: filterReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

/**
 * Sixth task
 */

// import { combineReducers, configureStore } from "@reduxjs/toolkit";
// import storage from 'redux-persist/lib/storage';
// import { persistReducer, persistStore, FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER, } from "redux-persist";
// import { contactsReducer } from "./contactsSlice";
// import { filterReducer } from "./filterSlice";

// const rootPersistConfig = {
//   key: 'root',
//   storage: storage,
//   whitelist: ['contacts']
// }

// const rootReducer = combineReducers({
//   contacts: contactsReducer,
//   filter: filterReducer,
// });

// const persistedReducer = persistReducer(rootPersistConfig, rootReducer)

// export const store = configureStore({
//   reducer: persistedReducer,
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware({
//     serializableCheck: {
//     ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//     },
//     })
// });

// export const persistor = persistStore(store)
