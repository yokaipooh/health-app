import type { MealCardProps } from '../../types/common.type';

export const MealCard = ({ imageUrl, date, label, onClick }: MealCardProps) => {
  return (
    <div
      className="relative aspect-square w-full cursor-pointer overflow-hidden group"
      onClick={onClick}
    >
      <img
        src={imageUrl}
        alt={`${date} ${label}`}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute bottom-0 left-0 bg-primary-300 text-light px-4 py-2 font-sans font-medium text-[15px] leading-[18px]">
        {date}.{label}
      </div>
    </div>
  );
};
