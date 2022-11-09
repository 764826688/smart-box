import request from '@/utils/request';
import { toSync } from '../utils/utils';

export function getUserInfo<T>() {
  return toSync<T>(request.get<T>('/user', { data: '1' }));
}
