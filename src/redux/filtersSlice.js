import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filters',
  initialState: { name: '' },
  reducers: {
    changeName(state, action) {
      state.name = action.payload;
      console.log(action.payload);
    },
  },
});

export const { changeName } = filterSlice.actions;

export default filterSlice.reducer;
