import { useState } from 'react';
import { flushSync } from 'react-dom';
import type { MockDiaryItem } from '../../types/common.type';
import { generateDiaryEntries } from '../../utils/mockData';
import { LoadMoreButton } from '../Button/LoadMoreButton';

interface DiaryGridProps {
  initialItems: MockDiaryItem[];
}

export const DiaryGrid = ({ initialItems }: DiaryGridProps) => {
  const [items, setItems] = useState<MockDiaryItem[]>(initialItems);

  const handleLoadMore = () => {
    const newItems = generateDiaryEntries(8);

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
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
        {items.map((item) => (
          <div key={item.id} className="aspect-square border-2 border-[#707070] p-4 pb-[27px] flex flex-col gap-2 bg-white">
            <div className="font-sans text-[18px] leading-[22px] text-dark-500">
              <h3 className="font-normal">{item.date}</h3>
              <h3 className="font-normal">{item.time}</h3>
            </div>
            <div className="flex-1">
              <p className="font-light text-[12px] leading-[17px] font-jp text-dark-500 line-clamp-2">
                {item.title}
              </p>
              <p className="font-light text-[12px] leading-[17px] font-jp text-dark-500 line-clamp-5">
                {item.content}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center">
        <LoadMoreButton onClick={handleLoadMore} label="自分の日記をもっと見る" />
      </div>
    </>
  );
};
