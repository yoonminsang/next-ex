import request from 'api/request';
import { IPost } from 'types/post';

const getPostsApi = () => request<IPost[]>('GET', 'https://jsonplaceholder.typicode.com/posts?_start=0&_end=10');
const getPostApi = ({ id }: { id: number }) =>
  request<IPost>('GET', `https://jsonplaceholder.typicode.com/posts/${id}`);

export const API_POST = {
  getPostsApi,
  getPostApi,
};
