import { createSlice } from "@reduxjs/toolkit";
import { addContact, deleteContact, fetchContacts } from "./contactsOps";

const contactsSlice = createSlice({
  name: "contacts",
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.items = action.payload
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      }).addCase(addContact.pending, (state)=>{state.loading = true}).addCase(addContact.fulfilled, (state, action)=>{
        state.loading = false;
        state.error = null;
        state.items.push(action.payload).addCase(deleteContact.pending, (state)=>{
          state.loading = true
        }).addCase(deleteContact.fulfilled, (state, action)=>{
          state.loading = false;
          state.error = null;
          state.items = state.items.filter(item=>item.id !== action.payload.id)
        })
      })
  },
});

export const contactsReducer = contactsSlice.reducer;

/**
 * Sixth task
 */

// import { createSlice } from "@reduxjs/toolkit";
// import { nanoid } from "nanoid";

// const contactsSlice = createSlice({
//   name: "contacts",
//   initialState: [],
//   reducers: {
//     addContact: (state, action) => {
//       const contact = { ...action.payload, id: nanoid() };
//       state.push(contact);
//     },
//     deleteContact: (state, action) => {
//       return state.filter((el) => el.id !== action.payload);
//     },
//   },
// });

// export const contactsReducer = contactsSlice.reducer;
// export const { addContact, deleteContact } = contactsSlice.actions;
