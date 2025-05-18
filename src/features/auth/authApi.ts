import axios, { AxiosResponse } from 'axios';
import { REST_HOST } from '@/constants/rest';
import { AppError } from '@/constants/appError';

const REST = {
  login: `${REST_HOST}/auth/login`,
  logout: `${REST_HOST}/auth/logout`,
};

/**
 * This function sends a POST request to the server to log in the user.
 * @param username the username
 * @param password  the password
 * @returns the response from the server
 */
const postLogin = async (
  username: string,
  password: string,
): Promise<AxiosResponse<string, AppError>> =>
  await axios.post(
    REST.login,
    { username, password },
    { withCredentials: true },
  );

export const AUTH_API = {
  login: postLogin,
};
