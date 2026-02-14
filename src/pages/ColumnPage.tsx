import { useState } from 'react';
import { flushSync } from 'react-dom';

import { LoadMoreButton } from '../components/Button/LoadMoreButton';
import { ColumnCard } from '../components/Card';
import type { MockColumnItem } from '../types/common.type';
import { generateColumnArticles } from '../utils/mockData';

const RECOMMENDATIONS = [
  {
    title: 'RECOMMENDED COLUMN',
    subTitle: 'オススメ'
  },
  {
    title: 'RECOMMENDED DIET',
    subTitle: 'ダイエット'
  },
  {
    title: 'RECOMMENDED BEAUTY',
    subTitle: '美容'
  },
  {
    title: 'RECOMMENDED HEALTH',
    subTitle: '健康'
  }
];

export const ColumnPage = () => {
  const [items, setItems] = useState<MockColumnItem[]>(() => generateColumnArticles(8));

  const handleLoadMore = () => {
    const newItems = generateColumnArticles(8);

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

  return (
    <section className="space-y-14 max-w-[960px] mx-auto w-full mt-14 pb-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {RECOMMENDATIONS.map((item, index) => (
          <div
            key={index}
            className="bg-dark-600 text-light pt-6 pb-5.5 px-2 flex flex-col items-center justify-center cursor-pointer hover:opacity-90 transition-opacity min-h-[144px]"
          >
            <h2 className="text-[22px] font-sans font-normal text-primary-300 text-center wrap-break-word leading-[27px] tracking-[0.11px]">
              {item.title}
            </h2>
            <div className="w-[56px] h-px bg-light mt-2.25 mb-2"></div>
            <p className="font-jp text-lg font-light leading-[26px]">
              {item.subTitle}
            </p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-2 gap-y-4.5">
        {items.map((item) => (
          <ColumnCard
            key={item.id}
            imageUrl={item.imageUrl}
            date={item.date}
            time={item.time}
            title={item.title}
            tags={item.tags}
          />
        ))}
      </div>

      <LoadMoreButton onClick={handleLoadMore} label="コラムをもっと見る" />
    </section>
  );
};
