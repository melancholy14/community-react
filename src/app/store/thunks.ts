import { AppDispatch } from '.';
import {
  loadPostsRequest,
  loadPostsSuccess,
  loadPostsFailure,
} from './slices/postListSlice';

import { Post, PostDetail } from './types';
import {
  savePostRequest,
  savePostSuccess,
  savePostFailure,
  loadPostRequest,
  loadPostFailure,
  loadPostSuccess,
} from './slices/postSlice';
import { push } from 'connected-react-router';

export const loadPostList = () => (dispatch: AppDispatch) => {
  dispatch(loadPostsRequest());

  try {
    const posts: Post[] = [
      {
        id: '1',
        title: 'adfsdf',
        creator: 'aaaaaa',
      },
      {
        id: '2',
        title: 'adfsdf333',
        creator: 'aaaaaa',
      },
      {
        id: '3',
        title: 'adfsdfr33',
        creator: 'aaaaaa',
      },
      {
        id: '4',
        title: 'adfsdft3tseger',
        creator: 'aaaaaa',
      },
    ];

    dispatch(loadPostsSuccess(posts));
  } catch (error) {
    dispatch(loadPostsFailure(error));
  }
};

export const savePost = (postDetail: PostDetail) => (dispatch: AppDispatch) => {
  dispatch(savePostRequest());

  try {
    dispatch(savePostSuccess(postDetail));

    dispatch(push('/fheih/view'));
  } catch (error) {
    dispatch(savePostFailure(error));
  }
};

export const loadPost = (id: string) => (dispatch: AppDispatch) => {
  dispatch(loadPostRequest());

  try {
    const posts: PostDetail[] = [
      {
        id: '1',
        title: 'adfsdf',
        creator: 'aaaaaa',
        content: 'faskdjgalrgar',
      },
      {
        id: '2',
        title: 'adfsdf333',
        creator: 'aaaaaa',
        content: 'faskdjgalrgar',
      },
      {
        id: '3',
        title: 'adfsdfr33',
        creator: 'aaaaaa',
        content: 'faskdjgalrgar',
      },
      {
        id: '4',
        title: 'adfsdft3tseger',
        creator: 'aaaaaa',
        content: 'faskdjgalrgar',
      },
    ];

    const post = posts.find(({ id: postId }) => id === postId);

    if (!post) {
      throw new Error('Not Found Post');
    }

    dispatch(loadPostSuccess(post));
  } catch (error) {
    dispatch(loadPostFailure(error));
  }
};
