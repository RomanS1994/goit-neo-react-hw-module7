import { createSlice } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';

export const selectContacts = state => state.contacts.items;
export const useContacts = () => useSelector(selectContacts);
const contactSlice = createSlice({
  name: 'contacts',
  initialState: { items: [] },
  reducers: {
    addContact(state, action) {
      state.items.push(action.payload);
    },
    deleteContact(state, action) {
      state.items = state.items.filter(el => el.id !== action.payload);
    },
  },
});

export const { addContact, deleteContact } = contactSlice.actions;

export default contactSlice.reducer;
