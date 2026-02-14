import { useState } from 'react';
import { flushSync } from 'react-dom';

import IconCup from '../assets/svgs/icon_cup.svg?react';
import IconKnife from '../assets/svgs/icon_knife.svg?react';
import { LoadMoreButton } from '../components/Button/LoadMoreButton';
import { MealCard } from '../components/Card';
import { DashboardHero } from '../components/Dashboard/Hero';
import { HexagonButton } from '../components/HexagonButton';
import type { MockMealItem } from '../types/common.type';
import { generateMealHistory } from '../utils/mockData';

export const Dashboard = () => {
  const [items, setItems] = useState<MockMealItem[]>(() => generateMealHistory(8));
  const [filter, setFilter] = useState<string | null>(null);

  const handleLoadMore = () => {
    const newItems = generateMealHistory(8);

    if (document.startViewTransition) {
      document.startViewTransition(() => {
        flushSync(() => {
          setItems((prev) => [...prev, ...newItems]);
        });
      });
    } else {
      setItems((prev) => [...prev, ...newItems]);
    }
  };

  const toggleFilter = (type: string) => {
    const newFilter = filter === type ? null : type;

    if (document.startViewTransition) {
      document.startViewTransition(() => {
        flushSync(() => {
          setFilter(newFilter);
        });
      });
    } else {
      setFilter(newFilter);
    }
  };

  const filteredItems = filter
    ? items.filter((item) => item.label === filter)
    : items;

  return (
    <div className="flex flex-col">
      <DashboardHero />
      <section className="space-y-6 max-w-[960px] mx-auto w-full px-4 mb-16">
        <div className="flex justify-center gap-16 py-6">
          <HexagonButton
            icon={IconKnife}
            label="Morning"
            onClick={() => toggleFilter('Morning')}
          />
          <HexagonButton
            icon={IconKnife}
            label="Lunch"
            onClick={() => toggleFilter('Lunch')}
          />
          <HexagonButton
            icon={IconKnife}
            label="Dinner"
            onClick={() => toggleFilter('Dinner')}
          />
          <HexagonButton
            icon={IconCup}
            label="Snack"
            onClick={() => toggleFilter('Snack')}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
          {filteredItems.map((item) => (
            <MealCard
              key={item.id}
              imageUrl={item.imageUrl}
              date={item.date}
              label={item.label}
            />
          ))}
        </div>

        <LoadMoreButton onClick={handleLoadMore} />
      </section>
    </div>
  );
};
