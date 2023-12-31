import axios, { AxiosError } from 'axios';
import { IContact } from 'interfaces/IContact';
import { createAppAsyncThunk } from './hooks';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { IContactForm } from 'interfaces/IContactForm';

axios.defaults.baseURL = 'https://64b6621cdf0839c97e1574fb.mockapi.io';

export const fetchContacts = createAsyncThunk<
  IContact[],
  undefined,
  {
    rejectValue: string;
  }
>('contacts/fetchContacts', async (_, thunkAPI) => {
  try {
    const response = await axios.get('/contacts?orderby=name&order=asc');
    return response.data as IContact[];
  } catch (err) {
    const error = err as Error | AxiosError;
    if (!axios.isAxiosError(error)) {
      console.log(error.message);
    }
    return thunkAPI.rejectWithValue(error.message as string);
  }
});

export const addContact = createAsyncThunk<
  IContact[],
  IContactForm,
  {
    rejectValue: string;
  }
>('contacts/addContact', async ({ name, phone }: IContactForm, thunkAPI) => {
  try {
    await axios.post('/contacts', { name, phone });
    const response = await axios.get('/contacts?orderby=name&order=asc');
    return response.data as IContact[];
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message as string);
  }
});

export const deleteContact = createAppAsyncThunk(
  'contacts/deleteContact',
  async (id: string, thunkAPI) => {
    try {
      const { data } = await axios.delete(`/contacts/${id}`);
      return data as IContact;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message as string);
    }
  }
);
