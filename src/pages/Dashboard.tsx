import IconCup from '../assets/svgs/icon_cup.svg?react';
import IconKnife from '../assets/svgs/icon_knife.svg?react';
import { HexagonButton } from '../components/HexagonButton';

export const Dashboard = () => {
  return (
    <div className="space-y-6">
      {/* Hexagon Menu Section */}
      <div className="flex justify-center gap-16 py-[272px]">
        <HexagonButton icon={IconKnife} label="Morning" onClick={() => console.log('Morning clicked')} />
        <HexagonButton icon={IconKnife} label="Lunch" onClick={() => console.log('Lunch clicked')} />
        <HexagonButton icon={IconKnife} label="Dinner" onClick={() => console.log('Dinner clicked')} />
        <HexagonButton icon={IconCup} label="Snack" onClick={() => console.log('Snack clicked')} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {['Patients', 'Appointments', 'Todays Vitals'].map((title) => (
          <div key={title} className="bg-surface p-6 rounded-xl shadow-sm border border-border hover:shadow-md transition-shadow">
            <h3 className="text-lg font-semibold text-text-muted mb-2">{title}</h3>
            <div className="text-3xl font-bold text-text-primary">0</div>
          </div>
        ))}
      </div>
    </div>
  );
};
