export interface CurrentUserInterface {
  bio: string | null;
  email: string;
  image: string | null;
  token: string;
  username: string;
  // additional
  id?: number;
  createdAt?: string;
  updatedAt?: string;
}
