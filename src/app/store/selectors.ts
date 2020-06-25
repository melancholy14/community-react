import { RootState } from './index';

export const selectPost = (state: RootState) => state.post;

export const selectUser = (state: RootState) => state.user;

export const selectError = (state: RootState) => state.error;
