import { SECONDS_TO_MS } from '@/constants/time';
import { EMPLOYEES_ADAPTER } from '@/features/employees/employeesAdapter';
import { EMPLOYEES_API } from '@/features/employees/employeesApi';
import { VITALS_API } from '@/features/vitals/vitalsApi';
import { TimeFormat } from '@/features/vitals/vitalsModel';
import { SelectMap } from '@/utils/heroui';
import { useInterval } from '@/utils/useInterval';
import { addToast, Button, Select, SelectItem } from '@heroui/react';
import React, { useEffect, useState } from 'react';

export const Attendance: React.FC = () => {
  const [localTime, setLocalTime] = useState(new Date());
  const [serverTime, setServerTime] = useState<Date | null>();
  const [offsetSeconds, setOffsetSeconds] = useState<number>(0);
  const [employees, setEmployees] = useState<SelectMap[]>([]);
  const [selectedEmployeeId, setSelectedEmployeeId] = useState<number>(0);

  // Fetch employees on interval
  useInterval(() => {
    EMPLOYEES_API.get()
      .then((response) => {
        if (response.status === 200) {
          setEmployees(EMPLOYEES_ADAPTER.toSelect(response.data));
        } else {
          throw new Error('Failed to fetch employees');
        }
      })
      .catch((error) => {
        console.error('Error fetching employees:', error);
        addToast({
          title: 'Toast Title',
          description: 'Toast Description',
        });
      });
    setEmployees([]);
  }, 30 * SECONDS_TO_MS);

  // Update local time every second
  useInterval(() => {
    setLocalTime(new Date());
  }, 1 * SECONDS_TO_MS);

  useInterval(() => {
    VITALS_API.time(TimeFormat.Milliseconds)
      .then((response) => {
        if (response.status === 200) {
          // Convert time from seconds to Date

          setServerTime(new Date(response.data));
        } else {
          throw new Error('Failed to fetch server time');
        }
      })
      .catch((error) => {
        console.error('Error fetching server time:', error);
        addToast({
          title: 'Toast Title',
          description: 'Toast Description',
        });
      });
  }, 1 * SECONDS_TO_MS);

  useEffect(() => {
    if (!serverTime) return;
    const offsetInSeconds = Math.floor(
      (localTime.getTime() - serverTime.getTime()) / 1000,
    );
    setOffsetSeconds(offsetInSeconds);
  }, [localTime, serverTime]);

  const handleClockIn = () => {
    if (selectedEmployeeId < 1) return;

    EMPLOYEES_API.clockIn(selectedEmployeeId)
      .then((response) => {
        if (response.status === 200) {
        } else {
          throw new Error('Failed to clock in');
        }
      })
      .catch((error) => {
        console.error('Error clocking in:', error);
        addToast({
          title: 'Error clocking in',
          color: 'warning',
          description: error.response.data.message,
        });
      });
  };

  const handleClockOut = () => {
    if (selectedEmployeeId < 1) return;

    EMPLOYEES_API.clockOut(selectedEmployeeId)
      .then((response) => {
        if (response.status === 200) {
        } else {
          throw new Error('Failed to clock out');
        }
      })
      .catch((error) => {
        console.error('Error clocking in:', error);
        addToast({
          title: 'Error clocking out',
          color: 'danger',
          description: error.response.data.message,
        });
      });
  };

  return (
    <div className="page flex flex-col items-center gap-10" id="attendance">
      <h1 className="title">Attendance</h1>
      <div className="flex flex-col">
        <h2>{localTime.toLocaleTimeString()}</h2>
        <h3 className={`text-${offsetSeconds > 900 ? 'red' : 'green'}-500`}>
          Browser is {offsetSeconds > 900 ? 'not' : ''} synced
        </h3>
      </div>

      {/* <h2>Offset: {time - time}</h2> */}
      <Select
        className="max-w-xs"
        label="Employee to Clock in/out"
        placeholder="Select an employee"
        onChange={(value) => {
          const employeeId = Number(value.target.value);
          setSelectedEmployeeId(employeeId);
        }}
      >
        {employees.map((employee) => (
          <SelectItem key={employee.key}>{employee.label}</SelectItem>
        ))}
      </Select>

      <div className="flex flex-col gap-1">
        <h1 className="text-center">Actions</h1>

        <div className="flex gap-2">
          <Button
            onPress={handleClockIn}
            disabled={selectedEmployeeId === null}
          >
            Clock in
          </Button>
          <Button
            onPress={handleClockOut}
            disabled={selectedEmployeeId === null}
          >
            Clock out
          </Button>
        </div>
      </div>
    </div>
  );
};
