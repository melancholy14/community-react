import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { savePost } from 'app/store/thunks';

import LinkButton from 'app/common/LinkButton';
import { PostDetail } from 'app/store/types';
import Button from 'app/common/Button';

type PostFormProps = {
  data: Partial<PostDetail>;
  isView: boolean;
};

function PostForm({ data, isView }: PostFormProps) {
  const [title, setTitle] = useState<string>('');
  const [content, setContent] = useState<string>('');

  const dispatch = useDispatch();

  useEffect(() => {
    if (data.title) {
      setTitle(data.title);
    }
    if (data.content) {
      setContent(data.content);
    }
  }, [dispatch, data]);

  const onSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    dispatch(
      savePost({
        id: data.id,
        title,
        content,
      })
    );
  };

  const onChangeTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    setTitle(value);
  };

  const onChangeContent = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = event.target;

    setContent(value);
  };

  return (
    <form className="pt-20" onSubmit={onSubmit}>
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
          onChange={onChangeTitle}
        />
      </div>
      {data?.author && (
        <div className="flex items-center my-2">
          <label htmlFor="title" className="w-1/6">
            Created By
          </label>
          <p>{data.author}</p>
        </div>
      )}
      <div className="flex flex-col my-2">
        <label htmlFor="content">Content</label>
        <textarea
          id="content"
          className="h-40 p-3 focus:outline-none"
          disabled={isView}
          value={content}
          onChange={onChangeContent}
        />
      </div>
      {!isView && (
        <div className="flex justify-end">
          <Button type="submit">Submit</Button>
        </div>
      )}
      {isView && (
        <div className="flex justify-end">
          <LinkButton to={`/${data.id}/edit`}>Edit</LinkButton>
        </div>
      )}
    </form>
  );
}

export default PostForm;
