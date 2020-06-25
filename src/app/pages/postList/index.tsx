import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Container from 'app/layouts/container';

import { selectPost, selectUser } from 'app/store/selectors';
import { loadPostList } from 'app/store/thunks';
import LinkButton from 'app/common/LinkButton';

import Post from './post';

function PostList() {
  const { loading, list, error } = useSelector(selectPost);
  const dispatch = useDispatch();

  const { name } = useSelector(selectUser);

  useEffect(() => {
    dispatch(loadPostList());
  }, [dispatch]);

  if (error) {
    return <div>Something went wrong!</div>;
  }

  return (
    <Container>
      <div className="flex justify-end items-center p-6">
        <div />
        {name && <LinkButton to="/new">Create Post</LinkButton>}
      </div>
      {loading && <div></div>}
      {!loading && (
        <div>
          {list?.map((post) => (
            <Post key={post.id} data={post} />
          ))}
        </div>
      )}
    </Container>
  );
}

export default PostList;
