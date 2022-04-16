import axios, { AxiosInstance, AxiosResponse } from 'axios';

type Method = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';

const client: AxiosInstance = axios.create();

client.defaults.withCredentials = true;

const multipartHeader = { 'Content-Type': 'multipart/form-data' };
const applicationHeader = { 'Content-Type': 'application/json' };

async function request<T>(method: Method, url: string, data?: unknown, multipart?: boolean): Promise<AxiosResponse<T>> {
  const contentType = multipart ? multipartHeader : applicationHeader;
  const res = await client({
    headers: {
      ...contentType,
    },
    method,
    url,
    data,
  });
  return res;
}

export default request;
