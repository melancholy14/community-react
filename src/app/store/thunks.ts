import { Base64 } from 'js-base64';
import { push } from 'connected-react-router';

import { AppDispatch } from '.';

import { PostDetail, Comment, User } from './types';
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
  deletePostRequest,
  deletePostFailure,
  deleteCommentRequest,
  deleteCommentSuccess,
  deleteCommentFailure,
} from './slices/postSlice';
import { userRequest, userSuccess, userFailure } from './slices/userSlice';
import request from 'app/utils/request';

export const loadPostList = () => async (dispatch: AppDispatch) => {
  dispatch(loadPostListRequest());

  try {
    const posts: PostDetail[] = await request('/post');

    dispatch(loadPostListSuccess(posts));
  } catch (error) {
    dispatch(loadPostListFailure(error));
  }
};

export const savePost = (
  postDetail: Partial<PostDetail>,
  user?: User
) => async (dispatch: AppDispatch) => {
  dispatch(savePostRequest());

  try {
    const { id } = postDetail;

    let response = null;
    if (id) {
      response = await request(`/post/${id}`, {
        method: 'PUT',
        data: postDetail,
      });
    } else if (user) {
      response = await request('/post', {
        method: 'POST',
        data: {
          author: user,
          ...postDetail,
        },
      });
    }

    dispatch(savePostSuccess(response));

    dispatch(push(`/${response.id}/view`));
  } catch (error) {
    dispatch(savePostFailure(error));
  }
};

export const loadPost = (id: string) => async (dispatch: AppDispatch) => {
  dispatch(loadPostRequest());

  try {
    const post: PostDetail = await request(`/post/${id}`);

    const comments: Comment[] = await request(`/post/${id}/comment`);

    if (!post) {
      throw new Error('Not Found Post');
    }

    post.comments = comments;

    dispatch(loadPostSuccess(post));
  } catch (error) {
    dispatch(loadPostFailure(error));
  }
};

export const deletePost = (id: string) => async (dispatch: AppDispatch) => {
  dispatch(deletePostRequest());

  try {
    await request(`/post/${id}`, {
      method: 'DELETE',
    });

    dispatch(push('/'));
  } catch (error) {
    dispatch(deletePostFailure(error));
  }
};

export const saveComment = (
  comment: Comment,
  postId?: string,
  user?: User
) => async (dispatch: AppDispatch) => {
  dispatch(saveCommentRequest());

  try {
    const { id } = comment;

    let response = null;
    if (id) {
      response = await request(`/post/${postId}/comment/${id}`, {
        method: 'PUT',
        data: comment,
      });
    } else if (user) {
      response = await request(`/post/${postId}/comment`, {
        method: 'POST',
        data: {
          author: user,
          ...comment,
        },
      });
    }

    dispatch(saveCommentSuccess(response));
  } catch (error) {
    dispatch(saveCommentFailure(error));
  }
};

export const deleteComment = (id: string, commentId: string) => async (
  dispatch: AppDispatch
) => {
  dispatch(deleteCommentRequest());

  try {
    await request(`/post/${id}/comment/${commentId}`, {
      method: 'DELETE',
    });

    dispatch(deleteCommentSuccess(commentId));
  } catch (error) {
    dispatch(deleteCommentFailure(error));
  }
};

export const signup = (id: string, name: string, password: string) => async (
  dispatch: AppDispatch
) => {
  dispatch(userRequest());

  try {
    const response = await request('/signup', {
      method: 'POST',
      data: { id, name, password },
    });

    dispatch(userSuccess(response));

    dispatch(push('/'));
  } catch (error) {
    dispatch(userFailure(error));
  }
};

export const login = (id: string, password: string) => async (
  dispatch: AppDispatch
) => {
  dispatch(userRequest());

  try {
    const response = await request('/login', {
      method: 'POST',
      headers: {
        Authorization: `Basic ${Base64.encode(`${id}:${password}`)}`,
      },
    });

    dispatch(userSuccess(response));

    dispatch(push('/'));
  } catch (error) {
    dispatch(userFailure(error));
  }
};

export const logout = () => async (dispatch: AppDispatch) => {
  dispatch(userRequest());

  try {
    dispatch(userSuccess({ id: undefined, name: undefined }));

    dispatch(push('/'));
  } catch (error) {
    dispatch(userFailure(error));
  }
};
