import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
import { Header } from '../components/Header';

export const DashboardLayout = () => {
  return (
    <div className="flex flex-col min-h-screen relative bg-background text-text-primary font-sans">
      <Header />
      <main className="flex-1 w-full max-w-[1280px] mx-auto p-4 md:p-8">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
