import React from 'react';
import { useDispatch } from 'react-redux';
import { push } from 'connected-react-router';

import { Post as PostType } from 'app/store/types';

type PostProps = {
  data: PostType;
};

function Post({ data: { id, title, creator } }: PostProps) {
  const dispatch = useDispatch();

  const onView = () => {
    dispatch(push(`/${id}/view`));
  };

  return (
    <div
      className="bg-white rounded-lg shadow-lg mb-3 p-2 px-4"
      onClick={onView}
    >
      <h3 className="text-lg font-semibold">{title}</h3>
      <p>{creator}</p>
    </div>
  );
}

export default Post;
