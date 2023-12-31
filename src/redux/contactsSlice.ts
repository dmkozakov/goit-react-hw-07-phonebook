import { PayloadAction, Reducer, createSlice } from '@reduxjs/toolkit';
import { addContact, deleteContact, fetchContacts } from './operations';
import { IContact } from 'interfaces/IContact';

export interface ContactsState {
  items: IContact[];
  isLoading: boolean;
  error: null | string;
}

const contactsInitialState = {
  items: [],
  isLoading: false,
  error: null,
} as ContactsState;

const handlePending = (state: ContactsState) => {
  state.isLoading = true;
  state.error = null;
};

const handleRejected = (
  state: ContactsState,
  action: PayloadAction<string>
) => {
  if (action.payload) {
    state.isLoading = false;
    state.error = action.payload;
  }
};

const handleFetchContacts = (
  state: ContactsState,
  action: PayloadAction<IContact[]>
) => {
  if (action.payload) {
    state.isLoading = false;
    state.error = null;
    state.items = action.payload;
  }
};

const handleAddContact = (
  state: ContactsState,
  action: PayloadAction<IContact[]>
) => {
  state.isLoading = false;
  state.error = null;
  state.items = action.payload;
};

const handleDeleteContact = (
  state: ContactsState,
  action: PayloadAction<IContact>
) => ({
  ...state,
  isLoading: false,
  error: null,
  items: [...state.items.filter(contact => contact.id !== action.payload.id)],
});

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchContacts.pending, handlePending)
      .addCase(fetchContacts.fulfilled, handleFetchContacts)
      .addCase(fetchContacts.rejected, handleRejected)
      .addCase(addContact.pending, handlePending)
      .addCase(addContact.fulfilled, handleAddContact)
      // .addCase(addContact.rejected, handleRejected)
      .addCase(deleteContact.pending, handlePending)
      .addCase(deleteContact.fulfilled, handleDeleteContact);
    // .addCase(deleteContact.rejected, handleRejected);
  },
});

export const contactsReducer = contactsSlice.reducer as Reducer<ContactsState>;
