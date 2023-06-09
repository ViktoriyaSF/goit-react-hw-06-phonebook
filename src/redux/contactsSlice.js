import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

export const contactsInitialState = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];
const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  reducers: {
    addContact: {
      // reducer(state, action) {
      //   state.push(action.payload);
      // },
      reducer(state, action) {
        const contact = { ...action.payload, id: nanoid() };
        state.push(contact);
      },
      prepare(newContact) {
        return {
          payload: {
            name: newContact.name,
            number: newContact.number,
            id: nanoid(),
          },
        };
      },
    },

    deleteContact: (state, action) => {
      state = state.filter(contact => contact.id !== action.payload);
      return state;
      // const index = state.findIndex(contact => contact.id !== action.payload);
      // state.splice(index, 1);
    },
  },
});

// const contactsSlice = createSlice({
//   name: 'contacts',
//   initialState: contactsInitialState,
//   reducers: {
//     addContact: (state, action) => {
//       state = [...state, action.payload];
//     },
//     deleteContact: (state, action) => {
//       state = state.filter(item => item.id !== action.payload);
//     },
//   },
// });

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
