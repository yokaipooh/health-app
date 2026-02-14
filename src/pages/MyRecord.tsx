
import { useState } from 'react';

import imgBodyRecord from '../assets/images/MyRecommend-1.jpg';
import imgMyExercise from '../assets/images/MyRecommend-2.jpg';
import imgMyDiary from '../assets/images/MyRecommend-3.jpg';

import { RecordCategoryCard } from '../components/Card/RecordCategoryCard';
import { BodyRecordChart } from '../components/Record/BodyRecordChart';
import { Diary } from '../components/Record/Diary';
import { ExerciseList } from '../components/Record/ExerciseList';
import type { MockDiaryItem } from '../types/common.type';
import { generateDiaryEntries } from '../utils/mockData';

const RECORDS = [
  {
    title: 'BODY RECORD',
    subTitle: '自分のカラダの記録',
    imageUrl: imgBodyRecord,
    targetId: 'body-record'
  },
  {
    title: 'MY EXERCISE',
    subTitle: '自分の運動の記録',
    imageUrl: imgMyExercise,
    targetId: 'my-exercise'
  },
  {
    title: 'MY DIARY',
    subTitle: '自分の日記',
    imageUrl: imgMyDiary,
    targetId: 'my-diary'
  }
];

export const MyRecord = () => {
  const [diaryItems] = useState<MockDiaryItem[]>(() => generateDiaryEntries(8));

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="space-y-14 max-w-[960px] mx-auto w-full mt-14 mb-16 px-4 lg:px-0">

      {/* Top Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {RECORDS.map((record) => (
          <RecordCategoryCard
            key={record.title}
            title={record.title}
            subTitle={record.subTitle}
            imageUrl={record.imageUrl}
            onClick={() => scrollToSection(record.targetId)}
          />
        ))}
      </div>

      {/* Body Record Chart */}
      <div id="body-record" className="w-full">
        <BodyRecordChart />
      </div>

      {/* Exercise List */}
      <div id="my-exercise" className="w-full">
        <ExerciseList />
      </div>

      {/* My Diary */}
      <div id="my-diary" className="w-full">
        <h2 className="text-[22px] leading-[27px] font-sans font-normal text-dark-500 mb-2">MY DIARY</h2>
        <Diary initialItems={diaryItems} />
      </div>

    </section>
  );
};
