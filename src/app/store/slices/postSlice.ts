import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PostState, PostDetail, Comment } from '../types';

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
    saveCommentRequest: (state) => {
      state.saving = true;
    },
    saveCommentSuccess: (state, action: PayloadAction<Comment>) => {
      // if (state.post) {
      //   if (!state.post.comments) {
      //     state.post.comments = [action.payload];
      //   } else {
      //     if (action.payload.id) {
      //       const findIndex = state.post.comments.findIndex(
      //         ({ id }) => id === action.payload.id
      //       );

      //       state.post.comments[findIndex] = action.payload;
      //     } else {
      //       state.post.comments = [
      //         action.payload,
      //         ...(state.post.comments || []),
      //       ];
      //     }
      //   }
      //   state.saving = false;
      // }
      state.saving = false;
    },
    saveCommentFailure: (state, action: PayloadAction<Error>) => {
      state.saving = false;
      state.error = action.payload;
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
  saveCommentRequest,
  saveCommentSuccess,
  saveCommentFailure,
} = postSlice.actions;

export default postSlice.reducer;
