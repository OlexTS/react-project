import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

const contactsSlice = createSlice({
  name: "contacts",
  initialState: [],
  reducers: {
    addContact: (state, action) => {
      const contact = { ...action.payload, id: nanoid() };
      state.push(contact);
    },
    deleteContact: (state, action) => {
    return  state.filter(el=>el.id !== action.payload)
    },
  },
});

export const contactsReducer = contactsSlice.reducer;
export const {addContact, deleteContact} = contactsSlice.actions;