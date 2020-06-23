import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Container from 'app/layouts/container';
import { useDispatch, useSelector } from 'react-redux';
import { selectPost } from 'app/store/selectors';
import { loadPost } from 'app/store/thunks';
import { clearPost } from 'app/store/slices/postSlice';

function PostList() {
  const [title, setTitle] = useState<string>();
  const [content, setContent] = useState<string>();

  const { id, type } = useParams();

  const { data } = useSelector(selectPost);

  const dispatch = useDispatch();

  useEffect(() => {
    if (!id) {
      dispatch(clearPost());
    } else if (id !== data?.id) {
      dispatch(loadPost(id));
    }

    if (data) {
      setTitle(data.title);
      setContent(data.content);
    }
  }, [dispatch, id, data]);

  const onSubmit = (event: React.FormEvent) => {
    event.preventDefault();
  };

  const onChangeTitle = (event) => {
    const { value } = event.target;

    
  }

  const isView = type === 'view';

  return (
    <Container>
      <form className="w-2/3 m-auto pt-20" onSubmit={onSubmit}>
        <div className="flex items-center my-2">
          <label htmlFor="title" className="w-1/6">
            Title
          </label>
          <input
            type="text"
            id="title"
            disabled={isView}
            className="w-5/6 px-2 focus:outline-none"
            value={title}
          />
        </div>
        {data?.creator && (
          <div className="flex items-center my-2">
            <label htmlFor="title" className="w-1/6">
              Created By
            </label>
            <p>{data.creator}</p>
          </div>
        )}
        <div className="flex flex-col my-2">
          <label htmlFor="content">Content</label>
          <textarea
            id="content"
            className="h-40 p-3 focus:outline-none"
            disabled={isView}
            value={content}
          />
        </div>
        {!isView && (
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-purple-500 rounded-lg py-2 px-4 focus:outline-none"
            >
              Submit
            </button>
          </div>
        )}
      </form>
    </Container>
  );
}

export default PostList;
