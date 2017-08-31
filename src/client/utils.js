import axios from 'axios';
import params from '../params';

const { server: { host, port } } = params;

export const requestJson = ({ method, url, body, headers }) => {
  const path = `http://${host}:${port}${url}`;
  return axios[method](path, body, { headers }).then(({ data }) => data);
};
