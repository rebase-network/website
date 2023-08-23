export interface ICategory {
  id: string;
  title: string;
  desc: string;
  createdAt: string;
}

interface Formats {
  small: Image;
  thumbnail: Image;
  medium: Image;
  large: Image;
}

interface Image {
  name: string;
  hash: string;
  ext: string;
  mime: string;
  path: string;
  width: number;
  height: number;
  size: number;
  url: string;
}

interface Cover {
  id: number;
  name: string;
  alternativeText: string;
  caption: string;
  width: number;
  height: number;
  formats: Formats;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: string;
  provider: string;
  provider_metadata: string;
}

export interface IPost {
  id: string;
  title: string;
  author: string;
  content: string;
  cover: Cover;
  createdAt: string;
  category: ICategory;
}

export interface IUser {
  username: string;
  email: string;
}

export interface IGeekDaily {
  id: string;
  editor: IUser;
  episode: string;
  title: string;
  url: string;
  time: Date;
  author: string;
  introduce: string;
  createdAt: string;
}
