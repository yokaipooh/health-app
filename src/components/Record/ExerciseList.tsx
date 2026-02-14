
import type { MockExerciseItem } from '../../types/common.type';
import { generateExerciseHistory } from '../../utils/mockData';

const ITEMS: MockExerciseItem[] = generateExerciseHistory(30); // Generate enough for scrolling

export const ExerciseList = () => {
  return (
    <div className="w-full bg-dark-500 p-6 md:p-8 text-white h-[264px] flex flex-col">
      <div className="flex items-center gap-6 mb-1 shrink-0">
        <p className="text-[15px] font-sans font-normal w-[96px] leading-[18px]">
          MY<br />EXERCISE
        </p>
        <span className="text-[22px] font-sans font-normal leading-[27px]">2021.05.21</span>
      </div>

      <div className="overflow-y-auto pr-6 custom-scrollbar flex-1 grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-2 content-start">
        {ITEMS.map((item) => (
          <div key={item.id} className="flex justify-between items-start border-b border-gray-400 pb-1 mb-0.5 relative">
            <div className="flex flex-col gap-1 w-full pl-3">
              <span className="absolute left-0 top-2 w-1 h-1 bg-white rounded-full"></span>
              <div className="flex justify-between w-full">
                <div className="flex flex-col">
                  <span className="text-[15px] leading-[22px] font-light font-jp text-white">{item.title}</span>
                  <span className="text-[15px] leading-[22px] font-normal font-sans text-primary-300">{item.kcal}</span>
                </div>
                <span className="text-[18px] leading-[22px] font-normal font-sans text-primary-300 mt-0.5 pr-[13px]">{item.time}</span>
              </div>
            </div>
          </div>
        ))}
      </div>


    </div>
  );
};
