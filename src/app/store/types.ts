export type Comment = {
  id: string;
  content: string;
  author?: string;
  created?: Date;
};

export type PostDetail = {
  id: string;
  title: string;
  author?: string;
  created?: Date;
  content?: string;
  comments?: Comment[];
};

export type PostState = {
  loading?: boolean;
  saving?: boolean;
  list?: PostDetail[];
  post?: PostDetail;
  error?: Error;
};
