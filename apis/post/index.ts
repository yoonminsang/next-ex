import { IPost } from 'types/post';
import request from '@/apis/request';

const getPostsApi = () => request<IPost[]>('GET', 'https://jsonplaceholder.typicode.com/posts?_start=0&_end=10');
const getPostByIdApi = (id: number) => request<IPost>('GET', `https://jsonplaceholder.typicode.com/posts/${id}`);

export const API_POST = {
  getPostsApi,
  getPostByIdApi,
};
