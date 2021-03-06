import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

import { clearPost } from 'app/store/slices/postSlice';
import { loadPost } from 'app/store/thunks';

import Container from 'app/layouts/container';
import { selectPost } from 'app/store/selectors';

import PostForm from './postForm';
import CommentForm from './commentForm';

function Post() {
  const {
    post: { comments = undefined, ...post } = { id: undefined },
  } = useSelector(selectPost);

  const dispatch = useDispatch();

  const { id, type } = useParams();

  const postId = post.id;

  useEffect(() => {
    if (!id && postId) {
      dispatch(clearPost());
    } else if (id && id !== postId) {
      dispatch(loadPost(id));
    }
  }, [dispatch, id, postId]);

  const isView = type === 'view';

  return (
    <Container>
      {post && <PostForm data={post} isView={isView} />}
      {isView && (
        <>
          <hr className="m-4 border-purple-700" />
          <p>What do you think on this post?</p>
          <CommentForm postId={post.id} isNew />
          <hr className="m-4 border-purple-700" />
          {comments &&
            comments.map((comment) => (
              <CommentForm key={comment.id} postId={post.id} data={comment} />
            ))}
        </>
      )}
    </Container>
  );
}

export default Post;
