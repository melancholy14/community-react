import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Container from 'app/layouts/container';

import { selectPost } from 'app/store/selectors';
import { loadPostList } from 'app/store/thunks';

import Post from './post';
import { Link } from 'react-router-dom';

function PostList() {
  const { loading, list, error } = useSelector(selectPost);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadPostList());
  }, [dispatch]);

  if (error) {
    return <div>Something went wrong!</div>;
  }

  return (
    <Container>
      <div className="w-2/3 m-auto">
        <div className="flex justify-end items-center p-6">
          <div />
          <Link to="/new" className="bg-purple-500 p-4 rounded-lg">
            Create Post
          </Link>
        </div>
        {loading && <div></div>}
        {!loading && (
          <div>
            {list?.map((post) => (
              <Post key={post.id} data={post} />
            ))}
          </div>
        )}
      </div>
    </Container>
  );
}

export default PostList;
