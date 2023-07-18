import axios from 'axios';
import { contactActions } from './contactsSlice';

axios.defaults.baseURL = 'https://64b6621cdf0839c97e1574fb.mockapi.io';

export const fetchContacts = () => async dispatch => {
  try {
    dispatch(contactActions.fetchingInProgress());
    const { data } = await axios.get('/contacts');

    dispatch(contactActions.fetchingSuccess(data.reverse()));
  } catch (error) {
    dispatch(contactActions.fetchingError(error.message));
  }
};

export const addContact = (name, phone) => async dispatch => {
  try {
    dispatch(contactActions.addContactInProgress());
    const { data } = await axios.post('/contacts', { name, phone });

    dispatch(contactActions.addContactSuccess(data));
  } catch (error) {
    console.log(error);
    dispatch(contactActions.addContactError(error.message));
  }
};

export const deleteContact = id => async dispatch => {
  try {
    dispatch(contactActions.deleteContactInProgress());
    const { data } = await axios.delete(`/contacts/${id}`);

    dispatch(contactActions.deleteContactSuccess(data));
  } catch (error) {
    console.log(error);
    dispatch(contactActions.deleteContactError(error.message));
  }
};
