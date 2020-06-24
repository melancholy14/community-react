import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PostState, PostDetail } from '../types';

const initialState: PostState = {
  loading: false,
  saving: false,
  list: undefined,
  post: undefined,
  error: undefined,
};

export const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    loadPostListRequest: (state) => {
      state.loading = true;
    },
    loadPostListSuccess: (state, action: PayloadAction<PostDetail[]>) => {
      state.loading = false;
      state.list = action.payload;
    },
    loadPostListFailure: (state, action: PayloadAction<Error>) => {
      state.loading = false;
      state.error = action.payload;
    },
    loadPostRequest: (state) => {
      state.loading = true;
    },
    loadPostSuccess: (state, action: PayloadAction<PostDetail>) => {
      state.loading = false;
      state.post = action.payload;
    },
    loadPostFailure: (state, action: PayloadAction<Error>) => {
      state.loading = false;
      state.error = action.payload;
    },
    savePostRequest: (state) => {
      state.saving = true;
    },
    savePostSuccess: (state, action: PayloadAction<PostDetail>) => {
      state.saving = false;
      state.post = action.payload;
    },
    savePostFailure: (state, action: PayloadAction<Error>) => {
      state.saving = false;
      state.error = action.payload;
    },
    clearPost: (state) => {
      state.loading = false;
      state.saving = false;
      state.post = undefined;
      state.error = undefined;
    },
  },
});

export const {
  loadPostListRequest,
  loadPostListSuccess,
  loadPostListFailure,
  loadPostRequest,
  loadPostSuccess,
  loadPostFailure,
  savePostRequest,
  savePostSuccess,
  savePostFailure,
  clearPost,
} = postSlice.actions;

export default postSlice.reducer;
