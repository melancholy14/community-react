import axios, { AxiosRequestConfig } from 'axios';

const API_URL = 'http://localhost:8080';

export default async function request(
  url: string,
  options?: Partial<AxiosRequestConfig>
) {
  const { method = 'GET', data } = options || {};

  try {
    const response = await axios({
      method,
      url: `${API_URL}${url}`,
      data,
      headers: {
        'Content-Type': 'application/json',
      },
    });

    return response.data;
  } catch (error) {
    console.error('In request', error);

    throw error;
  }
}
