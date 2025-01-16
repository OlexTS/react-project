import { createSelector } from "@reduxjs/toolkit";

export const selectContacts = (state) => state.contacts.items;
export const selectFilter = (state) => state.filter;
export const selectFilteredContacts = createSelector(
  selectContacts,
  selectFilter,
  (contacts, filterValue) => {
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(filterValue.toLowerCase())
    );
  }
);
