import { createSelector } from "@reduxjs/toolkit";
import { selectContacts } from "../contacts/selectors";

export const selectFilter = (state) => state.filter;
export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filterValue) => {
    return contacts.filter(({ name, number }) =>
      name.toLowerCase().includes(filterValue.toLowerCase())||number.includes(filterValue)
    );
  }
);
