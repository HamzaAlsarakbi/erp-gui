import React from 'react';
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from '@heroui/react';

export const AttendanceTable: React.FC = () => {
  return (
    <div className="table" id="attendance">
      <h1 className="text-center">Attendance</h1>
      <Table aria-label="Employee Attendance">
        <TableHeader>
          <TableColumn>Employee Code</TableColumn>
          <TableColumn>Employee Name</TableColumn>
          <TableColumn>Clock In</TableColumn>
        </TableHeader>
        <TableBody>
          <TableRow key="1">
            <TableCell>1</TableCell>
            <TableCell>John Doe</TableCell>
            <TableCell>9:00 AM</TableCell>
          </TableRow>
        </TableBody>
      </Table>
      <div className="flex justify-end">
        <Button color="primary" className="">
          Refresh
        </Button>
      </div>
    </div>
  );
};
