import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { format } from 'date-fns';

import { savePost } from 'app/store/thunks';

import LinkButton from 'app/common/LinkButton';
import { PostDetail } from 'app/store/types';
import Button from 'app/common/Button';
import { selectUser } from 'app/store/selectors';
import Label from 'app/common/Label';

type PostFormProps = {
  data: Partial<PostDetail>;
  isView: boolean;
};

function PostForm({ data, isView }: PostFormProps) {
  const [title, setTitle] = useState<string>('');
  const [content, setContent] = useState<string>('');

  const user = useSelector(selectUser);

  const dispatch = useDispatch();

  useEffect(() => {
    if (data) {
      setTitle(data.title || '');
      setContent(data.content || '');
    }
  }, [dispatch, data]);

  const onSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    dispatch(
      savePost(
        {
          id: data.id,
          title,
          content,
        },
        user
      )
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
      <Label id="title" label="Title">
        <input
          type="text"
          id="title"
          disabled={isView}
          className="w-5/6 px-2 focus:outline-none"
          value={title}
          onChange={onChangeTitle}
        />
      </Label>
      {data?.author && (
        <Label id="author" label="Created By">
          <p>{data.author.name}</p>
        </Label>
      )}
      {data?.created && (
        <Label id="created" label="Created At">
          <p>{format(new Date(data.created), 'dd MMMM yyyy, HH:mm')}</p>
        </Label>
      )}
      <textarea
        id="content"
        className="w-full h-40 p-3 focus:outline-none"
        disabled={isView}
        value={content}
        onChange={onChangeContent}
      />
      {!isView && (
        <div className="flex justify-end">
          <Button type="submit">Submit</Button>
        </div>
      )}
      {user.id === data?.author?.id && isView && (
        <div className="flex justify-end">
          <LinkButton to={`/${data.id}/edit`}>Edit</LinkButton>
        </div>
      )}
    </form>
  );
}

export default PostForm;
