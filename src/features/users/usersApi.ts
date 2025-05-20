import axios, { AxiosResponse } from 'axios';
import { REST_HOST } from '@/constants/rest';
import { AppError } from '@/constants/appError';
import { UserState } from '@/features/auth/authSlice';

const REST = {
  create: `${REST_HOST}/users`,
  me: `${REST_HOST}/users/me/`,
  update: (username: string) => `${REST_HOST}/users/${username}`,
  delete: (username: string) => `${REST_HOST}/users/${username}`,
};

/**
 * This function sends a GET request to the server to get the user information.
 *
 * @param username the username, if not provided, it will get the current user
 *
 * @returns the response from the server
 */
const getMe = async (): Promise<AxiosResponse<UserState, AppError>> =>
  await axios.get(REST.me, { withCredentials: true });

export const USERS_API = {
  get: {
    me: getMe,
  },
};
