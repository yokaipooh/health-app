import { Outlet } from 'react-router-dom';
import { ScrollToTopButton } from '../components/Button/ScrollToTopButton';
import Footer from '../components/Footer';
import { Header } from '../components/Header';

export const DashboardLayout = () => {
  return (
    <div className="flex flex-col min-h-screen relative bg-background text-text-primary font-sans">
      <Header />
      <main className="flex-1 w-full">
        <Outlet />
      </main>
      <Footer />
      <ScrollToTopButton />
    </div>
  );
};
