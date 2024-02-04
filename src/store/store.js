import { configureStore } from '@reduxjs/toolkit';

import { reducer } from './reducer';
import { contactsApi } from './contacts/contactsApi';

export const store = configureStore({
  reducer: reducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(contactsApi.middleware),
});
