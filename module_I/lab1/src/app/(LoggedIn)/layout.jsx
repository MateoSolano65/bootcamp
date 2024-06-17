'use client';

import { NavbarDashboard } from 'lab1/components';

export default function DashboardLayout({ children }) {
  return (
    <>
      <NavbarDashboard />
      <div>{children}</div>
    </>
  );
}
