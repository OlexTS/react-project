import { createSelector } from "@reduxjs/toolkit";

export const useContacts = (state) => state.contacts;
export const useFilter = (state) => state.filter;
export const useFilteredContacts = createSelector(
  useContacts,
  useFilter,
  (contacts, filterValue) => {
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(filterValue.toLowerCase())
    );
  }
);
