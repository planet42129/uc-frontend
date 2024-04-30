/**
 * request 网络请求工具
 * 更详细的 api 文档: https://github.com/umijs/umi-request
 */
// import request from 'umi-request';
import  {extend} from 'umi-request';
import {message} from "antd";
import { history  } from '@umijs/max';
const loginPath = '/user/login';

/**
 * 配置request请求时的默认参数
 */
// eslint-disable-next-line @typescript-eslint/no-redeclare
const request = extend({
  credentials: 'include', // 默认请求是否带上cookie
  prefix: process.env.NODE_ENV === 'production' ? 'http://47.100.246.109' : undefined
  // prefix: 'http://127.0.0.1'
  // requestType: 'form',
});

/**
 * 所有请求拦截器
 */
request.interceptors.request.use((url, options): any => {
  console.log(`do request url = ${url}`)
  return {
    url,
    options: {
      ...options,
      headers: {
      },
    },
  };
});

/**
 * 所有响应拦截器
 */
request.interceptors.response.use(async (response, options): Promise<any> => {
  const res = await response.clone().json();
  if (res.code === 0) {
    return res.data;
  }
  if (res.code === 40100) {
    message.error('请先登录');
    history.push(loginPath);
  } else {
    message.error(res.description);
  }
  return res.data;
});

export default request;
