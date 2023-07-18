import { createSlice } from '@reduxjs/toolkit';

const contactsInitialState = {
  items: [],
  isLoading: false,
  error: null,
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  reducers: {
    fetchingInProgress(state) {
      return {
        ...state,
        isLoading: true,
      };
    },
    fetchingSuccess(state, action) {
      return {
        ...state,
        items: [...action.payload],
        isLoading: false,
        error: null,
      };
    },
    fetchingError(state, action) {
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    },
    addContactSuccess(state, action) {
      return {
        ...state,
        items: [action.payload, ...state.items],
        isLoading: false,
        error: null,
      };
    },
    addContactError(state, action) {
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    },
    addContactInProgress(state) {
      return {
        ...state,
        isLoading: true,
      };
    },
    deleteContactSuccess(state, action) {
      return {
        ...state,
        items: [
          ...state.items.filter(contact => action.payload.id !== contact.id),
        ],
        isLoading: false,
        error: null,
      };
    },
    deleteContactError(state, action) {
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    },
    deleteContactInProgress(state) {
      return {
        ...state,
        isLoading: true,
      };
    },
  },
});

export const contactActions = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
