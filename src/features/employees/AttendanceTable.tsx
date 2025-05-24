import React from 'react';
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
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
      <Dropdown>
        <DropdownTrigger>
          <Button>Employee</Button>
        </DropdownTrigger>
        <DropdownMenu>
          <DropdownItem key="1">Employee 1</DropdownItem>
          <DropdownItem key="2">Employee 2</DropdownItem>
          <DropdownItem key="3">Employee 3</DropdownItem>
        </DropdownMenu>
      </Dropdown>

      <Dropdown>
        <DropdownTrigger>
          <Button>Time</Button>
        </DropdownTrigger>
        <DropdownMenu>
          <DropdownItem key="1">Last 24 hours</DropdownItem>
          <DropdownItem key="2">Last 2 days</DropdownItem>
          <DropdownItem key="3">Last week</DropdownItem>
          <DropdownItem key="4">Last month</DropdownItem>
          <DropdownItem key="5">All time</DropdownItem>
        </DropdownMenu>
      </Dropdown>

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
