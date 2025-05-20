import { UserRole } from '@/features/auth/authSlice';

/**
 * @description This file contains the routes for the application.
 */
export const ROUTES = {
  login: '/login',
  splash: '/',

  attendance: '/attendance',
  dashboard: '/dashboard',
  inventory: '/inventory',

  not_found: '*',
};

interface NavigationRoute {
  name: string;
  route: string;
  icon?: JSX.Element;
  restrictedTo?: UserRole[];
  children?: NavigationRoute[];
}

export const NAV_ROUTES: NavigationRoute[] = [
  {
    name: 'Dashboard',
    route: ROUTES.dashboard,
    // icon: <DashboardIcon />,
    restrictedTo: [UserRole.ADMIN, UserRole.EMPLOYEE],
  },
  {
    name: 'Attendance',
    route: ROUTES.attendance,
    // icon: <AttendanceIcon />,
  },
  {
    name: 'Inventory',
    route: ROUTES.inventory,
    restrictedTo: [UserRole.ADMIN, UserRole.EMPLOYEE],
    // icon: <InventoryIcon />,
  },
];
