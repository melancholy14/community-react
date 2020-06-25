import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { UserState, User, InnerError } from '../types';

const initialState: UserState = {
  id: undefined,
  name: undefined,
  loading: false,
  error: undefined,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    userRequest: (state) => {
      state.loading = true;
      state.error = undefined;
    },
    userSuccess: (state, action: PayloadAction<User>) => {
      state.loading = false;
      state.id = action.payload.id;
      state.name = action.payload.name;
    },
    userFailure: (state, action: PayloadAction<InnerError>) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { userRequest, userSuccess, userFailure } = userSlice.actions;

export default userSlice.reducer;
