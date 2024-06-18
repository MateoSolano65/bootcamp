'use client';

import { Sidebar } from 'lab1/components';

export default function DashboardLayout({ children }) {
  return (
    <Sidebar>
      <div>{children}</div>
    </Sidebar>
  );
}
