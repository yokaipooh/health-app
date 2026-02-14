import classNames from 'classnames';
import { Calendar, HeartPulse, LayoutDashboard, Settings, Users } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const NAV_ITEMS = [
  { icon: LayoutDashboard, label: 'Dashboard', path: '/' },
  { icon: Users, label: 'Patients', path: '/patients' },
  { icon: Calendar, label: 'Appointments', path: '/appointments' },
  { icon: HeartPulse, label: 'Vitals', path: '/vitals' },
  { icon: Settings, label: 'Settings', path: '/settings' },
];

export const Sidebar = () => {
  return (
    <aside className="w-64 h-screen bg-surface border-r border-border flex flex-col p-6 sticky top-0 transition-all duration-300">
      <div className="flex items-center gap-3 mb-8 font-heading font-bold text-xl text-primary">
        <HeartPulse className="w-8 h-8 text-primary" />
        <span>HealthApp</span>
      </div>

      <nav className="flex flex-col gap-2">
        {NAV_ITEMS.map(({ icon: Icon, label, path }) => (
          <NavLink
            key={path}
            to={path}
            className={({ isActive }) =>
              classNames(
                'flex items-center gap-3 px-4 py-3 text-text-secondary rounded-lg font-medium transition-colors duration-200',
                'hover:bg-surface-hover hover:text-text-primary',
                isActive && 'bg-gradient-brand text-background shadow-md'
              )
            }
          >
            <Icon className="w-5 h-5 flex-shrink-0" />
            <span>{label}</span>
          </NavLink>
        ))}
      </nav>
    </aside>
  );
};
