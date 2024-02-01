import { combineReducers } from 'redux';
// import { contactReducer } from './contacts/contactSlice';
import { filterReducer } from './filter/filterSlice';
import { contactsApi } from './contacts/contactsApi';

export const reducer = combineReducers({
  // contacts: contactReducer,
  filter: filterReducer,
  [contactsApi.reducerPath]: contactsApi.reducer,
});
