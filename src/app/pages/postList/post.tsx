import React from 'react';
import { useDispatch } from 'react-redux';
import { push } from 'connected-react-router';

import { format } from 'date-fns';

import { PostDetail } from 'app/store/types';

type PostProps = {
  data: PostDetail;
};

function Post({
  data: { id, title, author: { name } = {}, created },
}: PostProps) {
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
      <p>
        <span>{name}</span>
        <span> | </span>
        {created && <span>{format(new Date(created), 'dd MMM yyyy')}</span>}
      </p>
    </div>
  );
}

export default Post;
