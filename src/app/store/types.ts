export type Post = {
  id: string;
  title: string;
  creator: string;
};

export type PostDetail = Post & {
  content: string;
};

export type PostListState = {
  loading?: boolean;
  data?: Post[];
  error?: Error;
};

export type PostState = {
  loading?: boolean;
  saving?: boolean;
  data?: PostDetail;
  error?: Error;
};
