import { AxiosPromise } from 'axios';

export function toSync<R, E = any | null>(promise: AxiosPromise<R>) {
  return promise
    .then<[null, R]>((res) => [null, res.data])
    .catch<[E, null]>((err) => [err, null]);
}
