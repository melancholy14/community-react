import { RootState } from './index';

export const selectPostList = (state: RootState) => state.postList;

export const selectPost = (state: RootState) => state.post;
