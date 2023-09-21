
export type User = {
  id: number; 
  name: string;
  email: string;
  password: string;
}

export type CreateUserData = Omit<User, "id">;

export type Post = {
  id: number;
  content: string;
  userId: number;
}

export type CreatePost = Omit<Post, "id">;