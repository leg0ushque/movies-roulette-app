import axios, { type AxiosError, type CancelToken, type Method } from 'axios';

const apiRequest = async<T> (method: Method, url: string, params: unknown = {}, data: unknown = {}, cancelToken?: CancelToken): Promise<T> => {
  try {
    const res = await axios({
      method: method || 'get',
      baseURL: 'http://localhost:4000',
      headers: { Accept: 'application/json' },
      url,
      params,
      data,
      cancelToken
    });
    return res.data;
  } catch (e) {
    const error = e as AxiosError;
    console.error(`Error! A response '${error.code}: ${error.message}' was received on '${method}' request to API/${url}`)

    return await Promise.reject(error);
  }
}

export default apiRequest
