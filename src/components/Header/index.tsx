import { useState } from 'react';
import { NavLink } from 'react-router-dom';

import IconChallenge from '../../assets/svgs/icon_challenge.svg?react';
import IconClose from '../../assets/svgs/icon_close.svg?react';
import IconInfo from '../../assets/svgs/icon_info.svg?react';
import IconMemo from '../../assets/svgs/icon_memo.svg?react';
import IconMenu from '../../assets/svgs/icon_menu.svg?react';
import Logo from '../../assets/svgs/logo.svg?react';

const NAV_ITEMS = [
  {
    icon: IconMemo,
    label: '自分の記録',
    path: '/my-record',
    hasBadge: false
  },
  {
    icon: IconChallenge,
    label: 'チャレンジ',
    path: '/challenge',
    hasBadge: false
  },
  {
    icon: IconInfo,
    label: 'お知らせ',
    path: '/notice',
    hasBadge: true,
    badgeCount: 1
  },
];

const MENU_ITEMS = [
  { label: '自分の記録', path: '/my-record' },
  { label: '体重グラフ', path: '/weight-graph' },
  { label: '目標', path: '/goal' },
  { label: '選択中のコース', path: '/selected-course' },
  { label: 'コラム一覧', path: '/column-list' },
  { label: '設定', path: '/settings' },
];

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="bg-dark-500 text-light relative z-50">
      <div className="h-16 flex items-center justify-between max-w-[1280px] mx-auto px-4 md:px-8">
        <div className="flex-shrink-0">
          <NavLink to="/">
            <Logo className="h-16 w-auto text-primary-400" />
          </NavLink>
        </div>

        <div className="flex items-center gap-12 font-jp relative">
          <nav className="flex items-center gap-8">
            {NAV_ITEMS.map((item, index) => {
              const Icon = item.icon;
              return (
                <NavLink
                  key={index}
                  to={item.path}
                  className={({ isActive }) =>
                    `flex items-center gap-2 group ${isActive ? 'text-primary-400' : 'text-light'}`
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
            <div className="absolute top-full right-0 mt-4 w-72 bg-gray-400 text-light font-jp shadow-xl">
              <ul className="flex flex-col">
                {MENU_ITEMS.map((item, index) => (
                  <li key={index} className="border-b border-light/20 last:border-b-0 w-full">
                    <NavLink
                      to={item.path}
                      className={({ isActive }) =>
                        `block px-8 py-6 text-lg hover:bg-dark-600 hover:text-primary-400 transition-colors ${isActive ? 'bg-dark-600 text-primary-400' : 'text-light'}`
                      }
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};
