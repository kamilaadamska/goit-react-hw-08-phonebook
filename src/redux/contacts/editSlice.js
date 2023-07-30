import { createSlice } from '@reduxjs/toolkit';

const editInitialState = {
  status: false,
  idToEdit: null,
};

const editSlice = createSlice({
  name: 'edit',
  initialState: editInitialState,
  reducers: {
    setEdit(state, action) {
      state.status = !state.status;
      state.idToEdit = action.payload;
    },
  },
});

export const { setEdit } = editSlice.actions;
export const editReducer = editSlice.reducer;
