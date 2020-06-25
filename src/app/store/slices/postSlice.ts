import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PostState, PostDetail, Comment, InnerError } from '../types';

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
      state.error = undefined;
    },
    loadPostListSuccess: (state, action: PayloadAction<PostDetail[]>) => {
      state.loading = false;
      state.list = action.payload;
    },
    loadPostListFailure: (state, action: PayloadAction<InnerError>) => {
      state.loading = false;
      state.error = action.payload;
    },
    loadPostRequest: (state) => {
      state.loading = true;
      state.error = undefined;
    },
    loadPostSuccess: (state, action: PayloadAction<PostDetail>) => {
      state.loading = false;
      state.post = action.payload;
    },
    loadPostFailure: (state, action: PayloadAction<InnerError>) => {
      state.loading = false;
      state.error = action.payload;
    },
    savePostRequest: (state) => {
      state.saving = true;
      state.error = undefined;
    },
    savePostSuccess: (state, action: PayloadAction<PostDetail>) => {
      state.saving = false;
      state.post = { ...state.post, ...action.payload };
    },
    savePostFailure: (state, action: PayloadAction<InnerError>) => {
      state.saving = false;
      state.error = action.payload;
    },
    deletePostRequest: (state) => {
      state.error = undefined;
    },
    deletePostFailure: (state, action: PayloadAction<InnerError>) => {
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
      state.error = undefined;
    },
    saveCommentSuccess: (state, action: PayloadAction<Comment>) => {
      if (state.post) {
        if (!state.post.comments) {
          state.post.comments = [action.payload];
        } else {
          if (action.payload.id) {
            const findIndex = state.post.comments.findIndex(
              ({ id }) => id === action.payload.id
            );

            if (findIndex > -1) {
              state.post.comments[findIndex] = action.payload;
            } else {
              state.post.comments = [...state.post.comments, action.payload];
            }
          } else {
            state.post.comments = [
              action.payload,
              ...(state.post.comments || []),
            ];
          }
        }
        state.saving = false;
      }
    },
    saveCommentFailure: (state, action: PayloadAction<InnerError>) => {
      state.saving = false;
      state.error = action.payload;
    },
    deleteCommentRequest: (state) => {
      state.error = undefined;
    },
    deleteCommentSuccess: (state, action: PayloadAction<string>) => {
      if (state.post?.comments) {
        state.post.comments = state.post.comments.filter(
          ({ id }) => id !== action.payload
        );
      }
    },
    deleteCommentFailure: (state, action: PayloadAction<InnerError>) => {
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
  deletePostRequest,
  deletePostFailure,
  clearPost,
  saveCommentRequest,
  saveCommentSuccess,
  saveCommentFailure,
  deleteCommentRequest,
  deleteCommentSuccess,
  deleteCommentFailure,
} = postSlice.actions;

export default postSlice.reducer;
