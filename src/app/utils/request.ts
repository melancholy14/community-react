import axios, { AxiosRequestConfig } from 'axios';
import { InnerError } from 'app/store/types';

const API_URL = 'http://localhost:8080';

export default async function request(
  url: string,
  options?: Partial<AxiosRequestConfig>
) {
  const { method = 'GET', data, headers } = options || {};

  try {
    const response = await axios({
      method,
      url: `${API_URL}${url}`,
      data,
      headers: {
        'Content-Type': 'application/json',
        ...headers,
      },
    });

    return response.data;
  } catch (error) {
    console.error('In request', error);

    const apiError: InnerError = {
      status: error.response.status,
      message: error.response.data || error.response.statusText,
    };

    throw apiError;
  }
}
