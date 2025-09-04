import { configureStore } from '@reduxjs/toolkit';

import contactsSliceReducer from './contactsSlice.js';
import filtersSliceReducer from './filtersSlice.js';

export const store = configureStore({
  reducer: {
    contacts: contactsSliceReducer,
    filters: filtersSliceReducer,
  },
});
