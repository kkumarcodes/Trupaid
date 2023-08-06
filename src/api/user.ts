import API from './api';
import { User, UserResponse } from 'types/entities/user';
import { CreateUser } from 'types/request/user';

const createUser = (userInfo: CreateUser): Promise<UserResponse> =>
  API.post(`users`, userInfo);
const getUser = (id: string): Promise<User> => API.get(`users/${id}`);
const getAstraReadyState = (id: string): Promise<UserResponse> =>
  API.get(`users/${id}`);
const postAstraAuthCode = (
  auth_code: string,
  redirect_uri: string,
): Promise<string> =>
  API.post(`users/access-token`, {
    code: auth_code,
    astraRedirectUri: redirect_uri,
  });

export default {
  createUser,
  getUser,
  getAstraReadyState,
  postAstraAuthCode,
};
