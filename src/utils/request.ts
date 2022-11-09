import axios, {
  AxiosResponse,
  AxiosPromise,
  AxiosRequestConfig,
  AxiosInstance,
} from 'axios';
import { notification } from 'antd';

const axiosInstance = axios.create({
  baseURL: process.env.NODE_ENV === 'development' ? '/api' : '',
  timeout: 30 * 1000,
}) as unknown as AxiosInstanceCus;

interface AxiosInstanceCus
  extends Omit<AxiosInstance, 'get' | 'post' | 'put' | 'delete'> {
  get: <T = any, P = Record<string, any>>(
    url: string,
    params?: P,
    config?: Omit<AxiosRequestConfig, 'url' | 'config'>,
  ) => AxiosPromise<T>;
  post: <T = any, P = any>(
    url: string,
    data?: P,
    config?: Omit<AxiosRequestConfig, 'url' | 'data'>,
  ) => AxiosPromise<T>;
  put: AxiosInstanceCus['post'];
  delete: AxiosInstanceCus['get'];
}

axiosInstance.interceptors.request.use(
  (config) => config,
  (error) => Promise.reject(error),
);

axiosInstance.interceptors.response.use(
  (response) => {
    const res = response.data;
    if (res.code !== 200) {
      notification.error({
        message: '提示',
        description: res.msg || 'Error',
      });
      return Promise.reject(new Error(res.msg || 'Error'));
    } else {
      return response.data as AxiosResponse<Response>;
    }
  },
  (error) => {
    const resp = error.response?.data || { msg: '' };
    notification.error({
      message: '提示',
      key: 'updateMsg',
      description: resp.msg,
    });
    return Promise.reject(error.response);
  },
);

export default axiosInstance;
