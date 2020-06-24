import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { Comment as CommentType } from 'app/store/types';
import Button from 'app/common/Button';
import { saveComment } from 'app/store/thunks';

type CommentFormProps = {
  postId?: string;
  data?: CommentType;
};

function CommentForm({ postId, data }: CommentFormProps) {
  const [content, setContent] = useState<string>('');

  const dispatch = useDispatch();

  useEffect(() => {
    if (data) {
      setContent(data.content || '');
    }
  }, [dispatch, data]);

  const onSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    dispatch(
      saveComment(
        {
          id: data?.id || '',
          content,
        },
        postId
      )
    );
  };

  const onChangeContent = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = event.target;

    setContent(value);
  };

  const isView = data?.author === 'aaaaa';

  return (
    <form
      className="rounded-lg shadow mb-3 p-2 px-4 flex justify-end"
      onSubmit={onSubmit}
    >
      {data?.author && (
        <div className="w-1/6 mr-2">
          <p>{data.author}</p>
        </div>
      )}
      <textarea
        id="content"
        className={`h-12 p-3 focus:outline-none ${isView ? 'w-5/6' : 'w-4/6'}`}
        disabled={isView}
        value={content}
        onChange={onChangeContent}
      />
      {!isView && <Button type="submit">Submit</Button>}
    </form>
  );
}

export default CommentForm;
