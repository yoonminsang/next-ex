import { useQuery } from 'react-query';
import { API_POST } from '@/apis/post';
import { IPost } from '@/types/post';
import { IError } from '@/types/error';
import { QUERY_POST_KEY } from '@/constants/queries/query-post-key';

export const useGetPosts = () => useQuery<IPost[], IError>([QUERY_POST_KEY.getPosts], API_POST.getPostsApi);
export const useGetPostById = ({ id }: { id: number }) =>
  useQuery<IPost, IError>([QUERY_POST_KEY.getPost, id], () => API_POST.getPostByIdApi(id));
