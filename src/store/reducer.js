import { combineReducers } from 'redux';
import { filterReducer } from './filter/filterSlice';
import { contactsApi } from './contacts/contactsApi';

export const reducer = combineReducers({
  filter: filterReducer,
  [contactsApi.reducerPath]: contactsApi.reducer,
});
