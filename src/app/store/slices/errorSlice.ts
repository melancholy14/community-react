import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { ErrorState, InnerError } from '../types';

const initialState: ErrorState = {
  status: undefined,
  message: undefined,
};

export const errorSlice = createSlice({
  name: 'error',
  initialState,
  reducers: {
    setError: (state, action: PayloadAction<InnerError>) => {
      state.status = action.payload.status;
      state.message = action.payload.message;
    },
    clearError: (state) => {
      state.status = undefined;
      state.message = undefined;
    },
  },
});

export const { setError, clearError } = errorSlice.actions;

export default errorSlice.reducer;
