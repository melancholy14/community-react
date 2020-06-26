import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { format } from 'date-fns';

import { EditorState, convertToRaw, ContentState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';

import { savePost, deletePost } from 'app/store/thunks';

import LinkButton from 'app/common/LinkButton';
import { PostDetail } from 'app/store/types';
import Button from 'app/common/Button';
import { selectUser } from 'app/store/selectors';
import Label from 'app/common/Label';

import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

type PostFormProps = {
  data: Partial<PostDetail>;
  isView: boolean;
};

function PostForm({ data, isView }: PostFormProps) {
  const [title, setTitle] = useState<string>('');
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );

  const user = useSelector(selectUser);

  const dispatch = useDispatch();

  useEffect(() => {
    if (data) {
      setTitle(data.title || '');
      if (data.content) {
        const { contentBlocks, entityMap } = htmlToDraft(data.content);
        const contentState = ContentState.createFromBlockArray(
          contentBlocks,
          entityMap
        );
        setEditorState(EditorState.createWithContent(contentState));
      }
    }
  }, [dispatch, data]);

  const onSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    dispatch(
      savePost(
        {
          id: data.id,
          title,
          content: draftToHtml(convertToRaw(editorState.getCurrentContent())),
        },
        user
      )
    );
  };

  const onDelete = () => {
    if (data.id) {
      dispatch(deletePost(data.id));
    }
  };

  const onChangeTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    setTitle(value);
  };

  const onEditorStateChange = (editorState: EditorState) => {
    setEditorState(editorState);
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
      {!isView && (
        <Editor
          editorState={editorState}
          wrapperClassName="bg-white w-full mb-3"
          onEditorStateChange={onEditorStateChange}
          toolbar={{ image: { uploadEnabled: false } }}
        />
      )}
      {isView && (
        <div
          dangerouslySetInnerHTML={{
            __html: draftToHtml(convertToRaw(editorState.getCurrentContent())),
          }}
        />
      )}
      {!isView && (
        <div className="flex justify-end">
          <Button type="submit">Submit</Button>
        </div>
      )}
      {user.id === data?.author?.id && isView && (
        <div className="flex justify-end">
          <Button onClick={onDelete} className="mr-3">
            Delete
          </Button>
          <LinkButton to={`/${data.id}/edit`}>Edit</LinkButton>
        </div>
      )}
    </form>
  );
}

export default PostForm;
