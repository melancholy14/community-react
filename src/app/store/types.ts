export type User = {
  id?: string;
  name?: string;
};

export type UserState = User & {
  error?: Error;
  loading?: boolean;
};

export type Comment = {
  id: string;
  content: string;
  author?: User;
  created?: Date;
};

export type PostDetail = {
  id: string;
  title: string;
  author?: User;
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
