import { push } from 'connected-react-router';

import { AppDispatch } from '.';

import { PostDetail, Comment } from './types';
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
  saveCommentRequest,
  saveCommentSuccess,
  saveCommentFailure,
} from './slices/postSlice';
import { userRequest, userSuccess, userFailure } from './slices/userSlice';

export const loadPostList = () => (dispatch: AppDispatch) => {
  dispatch(loadPostListRequest());

  try {
    const posts: PostDetail[] = [
      {
        id: '1',
        title: 'adfsdf',
        author: 'aaaaaa',
      },
      {
        id: '2',
        title: 'adfsdf333',
        author: 'aaaaaa',
      },
      {
        id: '3',
        title: 'adfsdfr33',
        author: 'aaaaaa',
      },
      {
        id: '4',
        title: 'adfsdft3tseger',
        author: 'aaaaaa',
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

    const author = 'askjdgbalrg';

    dispatch(
      savePostSuccess({
        title,
        content,
        author,
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
        author: 'aaaaaa',
        content: 'faskdjgalrgar',
      },
      {
        id: '2',
        title: 'adfsdf333',
        author: 'aaaaaa',
        content: 'faskdjgalrgar',
      },
      {
        id: '3',
        title: 'adfsdfr33',
        author: 'aaaaaa',
        content: 'faskdjgalrgar',
      },
      {
        id: '4',
        title: 'adfsdft3tseger',
        author: 'aaaaaa',
        content: 'faskdjgalrgar',
      },
    ];

    const comments: Comment[] = [
      {
        id: '1',
        author: 'aaaaaa',
        content: 'faskdjgalrgar',
      },
      {
        id: '2',
        author: 'aaaaaa',
        content: 'faskdjgalrgar',
      },
      {
        id: '3',
        author: 'aaaaaa',
        content: 'faskdjgalrgar',
      },
      {
        id: '4',
        author: 'aaaaaa',
        content: 'faskdjgalrgar',
      },
    ];

    const post = posts.find(({ id: postId }) => id === postId);

    if (!post) {
      throw new Error('Not Found Post');
    }

    post.comments = comments;

    dispatch(loadPostSuccess(post));
  } catch (error) {
    dispatch(loadPostFailure(error));
  }
};

export const saveComment = (comment: Comment, postId?: string) => (
  dispatch: AppDispatch
) => {
  dispatch(saveCommentRequest());

  try {
    const { id, content } = comment;

    const author = 'askjdgbalrg';

    dispatch(
      saveCommentSuccess({
        content,
        author,
        id: id || 'asgalrgoiehehrogr',
      })
    );
  } catch (error) {
    dispatch(saveCommentFailure(error));
  }
};

export const signup = (id: string, name: string, password: string) => (
  dispatch: AppDispatch
) => {
  dispatch(userRequest());

  try {
    dispatch(userSuccess({ id, name }));

    dispatch(push('/'));
  } catch (error) {
    dispatch(userFailure(error));
  }
};

export const login = (id: string, password: string) => (
  dispatch: AppDispatch
) => {
  dispatch(userRequest());

  try {
    dispatch(userSuccess({ id }));

    dispatch(push('/'));
  } catch (error) {
    dispatch(userFailure(error));
  }
};
