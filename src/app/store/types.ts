export type PostDetail = {
  id: string;
  title: string;
  creator: string;
  content?: string;
};

export type PostState = {
  loading?: boolean;
  saving?: boolean;
  list?: PostDetail[];
  post?: PostDetail;
  error?: Error;
};
