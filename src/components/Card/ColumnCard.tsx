import type { ColumnCardProps } from '../../types/common.type';

export const ColumnCard = ({ imageUrl, date, time, title, tags, onClick }: ColumnCardProps) => {
  return (
    <div
      className="flex flex-col gap-2 cursor-pointer group w-full"
      onClick={onClick}
    >
      <div className="relative aspect-[234/145] w-full overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute bottom-0 left-0 bg-primary-300 text-light px-2 py-1 font-sans text-[15px] leading-[30px] flex items-center gap-2">
          <span>{date}</span>
          <span>{time}</span>
        </div>
      </div>

      <h3 className="text-[15px] font-jp font-light leading-[22px] line-clamp-2 mt-1 group-hover:text-primary-400 transition-colors">
        {title}
      </h3>

      <div className="flex flex-wrap gap-2">
        {tags.map((tag, i) => (
          <span key={i} className="text-primary-400 text-[12px] leading-[22px] font-light">
            #{tag}
          </span>
        ))}
      </div>
    </div>
  );
};
