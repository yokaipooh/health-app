
import { useState } from 'react';
import { CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis } from 'recharts';
import { generateBodyRecordData } from '../../utils/mockData';

const FILTERS = ['日', '週', '月', '年'];

export const BodyRecordChart = () => {
  const [activeFilter, setActiveFilter] = useState('年');
  const [data, setData] = useState(() => generateBodyRecordData('年'));

  const handleFilterChange = (filter: string) => {
    setActiveFilter(filter);
    setData(generateBodyRecordData(filter));
  };

  return (
    <div className="w-full bg-dark-500 p-6 md:p-8 text-white h-full min-h-[300px]">
      <div className="flex items-center gap-6 mb-4">
        <p className="text-[15px] font-sans font-normal w-[96px] leading-[18px]">
          BODY<br />RECORD
        </p>
        <span className="text-[22px] leading-[27px] font-sans font-normal">2021.05.21</span>
      </div>

      <div className="h-[200px] w-full mt-2">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid stroke="#777777" vertical={true} horizontal={false} />
            <XAxis
              dataKey="name"
              stroke="#FFFFFF"
              tick={{ fontSize: 12 }}
              tickLine={false}
              axisLine={false}
              interval={activeFilter === '日' ? 3 : activeFilter === '月' ? 4 : 'preserveStartEnd'}
            />
            <Tooltip
              contentStyle={{ backgroundColor: '#2E2E2E', border: 'none' }}
              itemStyle={{ color: '#fff' }}
            />
            <Line
              type="monotone"
              dataKey="weight"
              stroke="#FFCC21"
              strokeWidth={3}
              dot={{ fill: '#FFCC21', r: 4 }}
              activeDot={{ r: 6 }}
            />
            <Line
              type="monotone"
              dataKey="bodyFat"
              stroke="#8FE9D0"
              strokeWidth={3}
              dot={{ fill: '#8FE9D0', r: 3 }}
              activeDot={{ r: 6 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="flex gap-4 mt-4">
        {FILTERS.map((label) => (
          <button
            key={label}
            onClick={() => handleFilterChange(label)}
            className={`w-[56px] h-[24px] rounded-[11px] text-[15px] font-light font-jp transition-colors
              ${activeFilter === label ? 'bg-primary-300 text-light' : 'bg-white text-primary-300'}
            `}
          >
            {label}
          </button>
        ))}
      </div>
    </div>
  );
};
