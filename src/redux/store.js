import { configureStore } from "@reduxjs/toolkit";
import { contactsListReducer } from "./contactsSlice";
import { filterReduser } from "./filtersSlice";

export const store = configureStore({
  reducer: {
    contacts: contactsListReducer,
    filter: filterReduser,
  },
});
