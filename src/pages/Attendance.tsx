import { Button, Select, SelectItem } from '@heroui/react';
import React, { useState } from 'react';

export const Attendance: React.FC = () => {
  const [isClockedIn, setIsClockedIn] = useState(false);
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const [timestamp, setTimestamp] = useState<string | null>(null);

  const employees = [
    { id: 1, label: 'Employee 1' },
    { id: 2, label: 'Employee 2' },
    { id: 3, label: 'Employee 3' },
    { id: 4, label: 'Employee 4' },
    { id: 5, label: 'Employee 5' },
  ];

  const handleClockIn = () => {
    setIsClockedIn(true);
    setTimestamp(new Date().toLocaleString());
  };

  const handleClockOut = () => {
    setIsClockedIn(false);
    setTimestamp(new Date().toLocaleString());
  };

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>Clock Menu</h1>
      <h2>Time: {time}</h2>
      <h2>Server time: {time}</h2>
      {/* <h2>Offset: {time - time}</h2> */}
      <h1>Actions</h1>
      <Select
        items={employees}
        label="Select employee"
        placeholder="Select employee"
      >
        {(employee) => <SelectItem>{employee.label}</SelectItem>}
      </Select>
      <Button>Clock in</Button>
      <Button>Clock out</Button>
    </div>
  );
};
