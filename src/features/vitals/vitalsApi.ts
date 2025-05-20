import axios, { AxiosResponse } from 'axios';
import { REST_HOST } from '@/constants/rest';
import { AppError } from '@/constants/appError';
import { TimeFormat } from './vitalsModel';

const REST = {
  time: (format?: TimeFormat) => `${REST_HOST}/vitals/time?${format ? `format=${format}` : ''}`,
  vitals: `${REST_HOST}/vitals/clock_in`,
};

/**
 * This function sends a GET request to the server to get the current time.
 *
 * @returns the response from the server
 */
const getTime = async (format?: TimeFormat
): Promise<AxiosResponse<string, AppError>> =>
  await axios.get(REST.time(format));

export const VITALS_API = {
  time: getTime,
};
