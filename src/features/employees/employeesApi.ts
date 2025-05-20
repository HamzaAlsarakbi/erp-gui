import axios, { AxiosResponse } from 'axios';
import { REST_HOST } from '@/constants/rest';
import { AppError } from '@/constants/appError';
import { Employee } from './employeesModel';

const REST = {
  get: `${REST_HOST}/employees`,
  clock_in: `${REST_HOST}/employees/clock_in`,
  clock_out: `${REST_HOST}/employees/clock_out`,
};

/**
 * This function sends a GET request to the server to get all employees.
 *
 * @returns the response from the server
 */
const getAllEmployees = async (): Promise<
  AxiosResponse<Employee[], AppError>
> => await axios.get(REST.get);

const postClockIn = async (
  employeeId: number,
): Promise<AxiosResponse<Employee[], AppError>> =>
  await axios.post(REST.clock_in, { employee_id: employeeId });

const postClockOut = async (
  employeeId: number,
): Promise<AxiosResponse<Employee[], AppError>> =>
  await axios.post(REST.clock_out, { employee_id: employeeId });

export const EMPLOYEES_API = {
  get: getAllEmployees,
  clockIn: postClockIn,
  clockOut: postClockOut,
};
