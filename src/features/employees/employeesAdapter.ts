import { SelectMap } from "@/utils/heroui";
import { Employee } from "./employeesModel";



/**
 * This function adapts the employee data to a format suitable for select components.
 * @param employee - The employee object to adapt.
 * @returns An object containing the key and label for the select component.
 */
const adaptToSelect = (employee: Employee): SelectMap => ({
  key: '' + employee.employee_id,
  label: `${employee.first_name} ${employee.last_name}`,
});


export const EMPLOYEES_ADAPTER = {
  toSelect: (employees: Employee[]): SelectMap[] =>
    employees.map(adaptToSelect),
};