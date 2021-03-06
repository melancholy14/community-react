import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Comment as CommentType } from 'app/store/types';
import Button from 'app/common/Button';
import { saveComment, deleteComment } from 'app/store/thunks';
import { selectUser } from 'app/store/selectors';

type CommentFormProps = {
  postId?: string;
  isNew?: boolean;
  data?: CommentType;
};

function CommentForm({ postId, isNew, data }: CommentFormProps) {
  const [content, setContent] = useState<string>('');
  const [isView, setIsView] = useState<boolean>(!isNew);

  const dispatch = useDispatch();

  const user = useSelector(selectUser);

  useEffect(() => {
    if (data) {
      setContent(data.content || '');
    } else if (!user.id) {
      setIsView(true);
    }
  }, [dispatch, data, user]);

  const onSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    dispatch(
      saveComment(
        {
          id: data?.id || '',
          content,
        },
        postId,
        user
      )
    );

    setContent('');
    setIsView(!isNew && !user.id);
  };

  const onDelete = () => {
    if (postId && data?.id) {
      dispatch(deleteComment(postId, data.id));
    }
  };

  const onChangeContent = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = event.target;

    setContent(value);
  };

  const isAuthor = data && data?.author?.id === user.id;

  return (
    <form
      className="rounded-lg shadow mb-3 p-2 px-4 flex justify-end"
      onSubmit={onSubmit}
    >
      {data?.author && (
        <div className="w-1/6 mr-2">
          <p className="italic font-semibold">{data.author.name}</p>
        </div>
      )}
      <textarea
        id="content"
        className={`h-12 p-1 focus:outline-none text-sm ${
          isView ? 'w-5/6' : 'w-4/6'
        }`}
        disabled={isView}
        value={content}
        onChange={onChangeContent}
      />
      {!isView && (
        <Button type="submit" className="w-1/6 ml-2">
          Submit
        </Button>
      )}
      {isView && isAuthor && (
        <>
          <Button className="w-1/12 ml-2" onClick={() => setIsView(false)}>
            Edit
          </Button>
          <Button className="w-1/12 ml-2" onClick={onDelete}>
            Delete
          </Button>
        </>
      )}
    </form>
  );
}

export default CommentForm;
