import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PostListState, Post } from '../types';

const initialState: PostListState = {
  loading: false,
  data: undefined,
  error: undefined,
};

export const postListSlice = createSlice({
  name: 'postList',
  initialState,
  reducers: {
    loadPostsRequest: (state) => {
      state.loading = true;
    },
    loadPostsSuccess: (state, action: PayloadAction<Post[]>) => {
      state.loading = false;
      state.data = action.payload;
    },
    loadPostsFailure: (state, action: PayloadAction<Error>) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  loadPostsRequest,
  loadPostsSuccess,
  loadPostsFailure,
} = postListSlice.actions;

export default postListSlice.reducer;
