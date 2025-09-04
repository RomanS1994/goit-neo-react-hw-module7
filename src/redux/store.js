import { configureStore } from '@reduxjs/toolkit';

import contactsSliceReducer from './contactsSlice.js';
import filtersSliceReducer from './filtersSlice.js';

configureStore({
  reducer: {
    contacts: contactsSliceReducer,
    filters: filtersSliceReducer,
  },
});

import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

export const store = configureStore({
  reducer: {
    contacts: contactsSliceReducer,
    filters: filtersSliceReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
