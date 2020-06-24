import { AppDispatch } from '.';

import { PostDetail } from './types';
import {
  loadPostListRequest,
  loadPostListSuccess,
  loadPostListFailure,
  savePostRequest,
  savePostSuccess,
  savePostFailure,
  loadPostRequest,
  loadPostFailure,
  loadPostSuccess,
} from './slices/postSlice';
import { push } from 'connected-react-router';

export const loadPostList = () => (dispatch: AppDispatch) => {
  dispatch(loadPostListRequest());

  try {
    const posts: PostDetail[] = [
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

    dispatch(loadPostListSuccess(posts));
  } catch (error) {
    dispatch(loadPostListFailure(error));
  }
};

export const savePost = (postDetail: Partial<PostDetail>) => (
  dispatch: AppDispatch
) => {
  dispatch(savePostRequest());

  try {
    const { id, title = '', content } = postDetail;

    const creator = 'askjdgbalrg';

    dispatch(
      savePostSuccess({
        title,
        content,
        creator,
        id: id || 'asgalrgoiehrgoehrogr',
      })
    );

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
