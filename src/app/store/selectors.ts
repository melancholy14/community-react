import { RootState } from './index';

export const selectPost = (state: RootState) => state.post;

export const selectUser = (state: RootState) => state.user;
