import { createSelector, createSlice } from "@reduxjs/toolkit";
import { addContact, deleteContact, fetchContacts } from "./contactsOps";

const initialState = {
  items: [],
  loading: false,
  error: null,
};
const onPending = (state, action) => {
  state.error = false;
  state.loading = true;
};
const onReject = (state, action) => {
  state.loading = false;
  state.error = true;
};
const contactSlice = createSlice({
  name: "contacts",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.pending, onPending)
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.items = action.payload;
        state.loading = false;
      })
      .addCase(fetchContacts.rejected, onReject)
      .addCase(addContact.pending, (state, action) => {})
      .addCase(addContact.fulfilled, (state, action) => {
        state.loading = false;
        state.items.push(action.payload);
      })
      .addCase(addContact.rejected, onReject)
      .addCase(deleteContact.pending, (state, action) => {})
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.items = state.items.filter(
          (item) => item.id !== action.payload.id
        );
      })
      .addCase(deleteContact.rejected, (state, action) => {});
  },
});

export const contactsListReducer = contactSlice.reducer;
export const selectLoading = (state) => state.contacts.loading;
export const selectError = (state) => state.contacts.error;

const selectFilter = (state) => state.filter.name;
const selectContacts = (state) => state.contacts.items;
export const selectFilteredContacts = createSelector(
  [selectFilter, selectContacts],
  (filter, contacts) =>
    !filter.trim()
      ? contacts
      : contacts.filter(({ name }) =>
          name.toLowerCase().includes(filter.toLowerCase())
        )
);
