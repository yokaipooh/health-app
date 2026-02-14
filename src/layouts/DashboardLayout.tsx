import { Outlet } from 'react-router-dom';
import { Sidebar } from '../components/Sidebar/Sidebar';

export const DashboardLayout = () => {
  return (
    <div className="flex min-h-screen relative bg-background text-text-primary">
      <Sidebar />
      <main className="flex-1 p-6 max-w-[1400px] overflow-y-auto w-full">
        <Outlet />
      </main>
    </div>
  );
};
