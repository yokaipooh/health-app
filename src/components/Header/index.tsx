import { useState } from 'react';
import { NavLink } from 'react-router-dom';

import IconChallenge from '../../assets/svgs/icon_challenge.svg?react';
import IconClose from '../../assets/svgs/icon_close.svg?react';
import IconInfo from '../../assets/svgs/icon_info.svg?react';
import IconMemo from '../../assets/svgs/icon_memo.svg?react';
import IconMenu from '../../assets/svgs/icon_menu.svg?react';
import Logo from '../../assets/svgs/logo.svg?react';
import { useAuth } from '../../contexts/AuthContext';
import { usePageTransition } from '../../hooks/usePageTransition';

const NAV_ITEMS = [
  {
    icon: IconMemo,
    label: '自分の記録',
    path: '/my-record',
    hasBadge: false,
    protected: true,
  },
  {
    icon: IconChallenge,
    label: 'チャレンジ',
    path: '/challenge',
    hasBadge: false,
    protected: true,
  },
  {
    icon: IconInfo,
    label: 'お知らせ',
    path: '/notice',
    hasBadge: true,
    badgeCount: 1,
    protected: true,
  },
];

const MENU_ITEMS = [
  { label: '自分の記録', path: '/my-record', protected: true },
  { label: '体重グラフ', path: '/weight-graph', protected: true },
  { label: '目標', path: '/goal', protected: true },
  { label: '選択中のコース', path: '/selected-course', protected: true },
  { label: 'コラム一覧', path: '/column-list', protected: false },
  { label: '設定', path: '/settings', protected: true },
];

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isAuthenticated, logout } = useAuth();
  const navigate = usePageTransition();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleNavClick = (e: React.MouseEvent, path: string) => {
    e.preventDefault();
    navigate(path);
  };

  const handleMenuClick = (e: React.MouseEvent, path: string) => {
    e.preventDefault();
    navigate(path);
    setIsMenuOpen(false);
  };

  const handleLogout = (e: React.MouseEvent) => {
    e.preventDefault();
    logout();
    navigate('/login');
    setIsMenuOpen(false);
  };

  const handleLogin = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate('/login');
    setIsMenuOpen(false);
  };

  const filteredNavItems = NAV_ITEMS.filter(item => isAuthenticated || !item.protected);
  const filteredMenuItems = MENU_ITEMS.filter(item => isAuthenticated || !item.protected);

  return (
    <header className="bg-dark-500 text-light relative z-50">
      <div className="h-16 flex items-center justify-between max-w-[1280px] mx-auto">
        <div className="flex-shrink-0">
          <NavLink
            to="/"
            onClick={(e) => handleNavClick(e, isAuthenticated ? '/' : '/column-list')}
          >
            <Logo className="h-16 w-auto text-primary-400" />
          </NavLink>
        </div>

        <div className="flex items-center gap-4 font-jp font-light relative">
          <nav className="flex items-center">
            {filteredNavItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <NavLink
                  key={index}
                  to={item.path}
                  onClick={(e) => handleNavClick(e, item.path)}
                  className={({ isActive }) =>
                    `min-w-40 h-12 flex items-center gap-2 p-2 group ${isActive ? 'text-primary-400' : 'text-light'}`
                  }
                >
                  <div className="relative">
                    <Icon className="w-8 h-8 text-primary-400" />
                    {item.hasBadge && (
                      <span className="absolute -top-1 -right-2 flex h-4 w-4 items-center justify-center rounded-full bg-primary-500 text-[10px] text-light font-sans font-bold">
                        {item.badgeCount}
                      </span>
                    )}
                  </div>
                  <span className="text-base group-hover:text-primary-400 transition-colors">{item.label}</span>
                </NavLink>
              );
            })}
          </nav>

          <button
            className="p-1 hover:opacity-80 transition-opacity z-50 relative"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
          >
            {isMenuOpen ? (
              <IconClose className="w-8 h-8 text-primary-400" />
            ) : (
              <IconMenu className="w-8 h-8 text-primary-400" />
            )}
          </button>

          {isMenuOpen && (
            <div className="absolute top-full right-0 mt-4 w-72 bg-gray-400 text-light font-jp font-light shadow-xl text-md">
              <ul className="flex flex-col">
                {filteredMenuItems.map((item, index) => (
                  <li key={index} className="border-b border-light/20 last:border-b-0 w-full">
                    <NavLink
                      to={item.path}
                      onClick={(e) => handleMenuClick(e, item.path)}
                      className={({ isActive }) =>
                        `block px-8 py-5.75 hover:bg-dark-600 hover:text-primary-400 transition-colors ${isActive ? 'bg-dark-600 text-primary-400' : 'text-light'}`
                      }
                    >
                      {item.label}
                    </NavLink>
                  </li>
                ))}
                {isAuthenticated ? (
                  <li className="border-b border-light/20 last:border-b-0 w-full">
                    <a href="#" onClick={handleLogout} className="block px-8 py-5.75 hover:bg-dark-600 hover:text-primary-400 transition-colors text-light">
                      ログアウト
                    </a>
                  </li>
                ) : (
                  <li className="border-b border-light/20 last:border-b-0 w-full">
                    <a href="#" onClick={handleLogin} className="block px-8 py-5.75 hover:bg-dark-600 hover:text-primary-400 transition-colors text-light">
                      ログイン
                    </a>
                  </li>
                )}
              </ul>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};
