import type { RecordCategoryCardProps } from '../../types/common.type';

export const RecordCategoryCard = ({ imageUrl, title, subTitle, onClick }: RecordCategoryCardProps) => {
  return (
    <div
      className="relative aspect-square w-full bg-primary-300 p-6 cursor-pointer group"
      onClick={onClick}
    >
      <div className="relative w-full h-full overflow-hidden bg-dark-600">
        <div className="absolute inset-0 bg-dark-600/50 z-10" />
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover mix-blend-luminosity opacity-60 transition-transform duration-500 group-hover:scale-110 group-hover:opacity-80"
        />

        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center gap-2">
          <h3 className="text-primary-300 text-2xl font-sans font-bold uppercase tracking-widest">
            {title}
          </h3>
          <div className="bg-primary-400 text-light px-5 py-0.5 min-w-[160px] text-center font-jp text-sm">
            {subTitle}
          </div>
        </div>
      </div>
    </div>
  );
};
