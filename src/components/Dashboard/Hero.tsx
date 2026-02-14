import { CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis } from 'recharts';
import d01 from '../../assets/images/d01.jpg';

const data = [
  { name: '6月', line1: 90, line2: 90 },
  { name: '7月', line1: 85, line2: 83 },
  { name: '8月', line1: 50, line2: 55 },
  { name: '9月', line1: 60, line2: 50 },
  { name: '10月', line1: 52, line2: 40 },
  { name: '11月', line1: 45, line2: 42 },
  { name: '12月', line1: 65, line2: 35 },
  { name: '1月', line1: 50, line2: 33 },
  { name: '2月', line1: 45, line2: 28 },
  { name: '3月', line1: 40, line2: 20 },
  { name: '4月', line1: 48, line2: 15 },
  { name: '5月', line1: 52, line2: 12 },
];

export const DashboardHero = () => {
  const percentage = 75;
  const radius = 80;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="w-full flex flex-col lg:flex-row h-auto min-h-[312px] bg-dark-600">
      <div className="relative w-full lg:w-[40%] h-[312px] bg-cover bg-center" style={{ backgroundImage: `url(${d01})` }}>
        <div className="absolute inset-0 bg-primary-300/10 mix-blend-overlay" />

        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="relative w-[180px] h-[180px] flex items-center justify-center">
            <svg className="absolute w-full h-full transform -rotate-90">
              <circle
                cx="90"
                cy="90"
                r={radius}
                fill="transparent"
                stroke="transparent"
                strokeWidth="3"
                className="drop-shadow-[0_0_6px_#FC7400]"
              />
              <circle
                cx="90"
                cy="90"
                r={radius}
                fill="transparent"
                stroke="#FFFFFF"
                strokeWidth="3"
                strokeDasharray={circumference}
                strokeDashoffset={strokeDashoffset}
                strokeLinecap="round"
                style={{
                  filter: "drop-shadow(0px 0px 6px #FC7400)"
                }}
              />
            </svg>

            <div className="absolute inset-0 flex items-center justify-center text-light font-sans text-shadow-md gap-1">
              <span className="text-[18px] leading-[22px] font-sans font-normal drop-shadow-[0_0_6px_#FC7400]">05/21</span>
              <span className="text-[25px] leading-[30px] font-sans font-normal drop-shadow-[0_0_6px_#FC7400]">{percentage}%</span>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full lg:w-[60%] h-[312px] bg-dark-600 px-4 py-2 flex items-center justify-center">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid vertical={true} horizontal={false} stroke="#777777" strokeOpacity={0.5} />
            <XAxis
              dataKey="name"
              tick={{ fill: '#FFFFFF', fontSize: 12 }}
              axisLine={false}
              tickLine={false}
              interval={0}
            />
            <Tooltip
              contentStyle={{ backgroundColor: '#414141', border: 'none', color: '#fff' }}
            />
            <Line
              type="monotone"
              dataKey="line1"
              stroke="#FFCC21"
              strokeWidth={3}
              dot={{ fill: '#FFCC21', r: 3 }}
              activeDot={{ r: 6 }}
            />
            <Line
              type="monotone"
              dataKey="line2"
              stroke="#8FE9D0"
              strokeWidth={3}
              dot={{ fill: '#8FE9D0', r: 3 }}
              activeDot={{ r: 6 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
