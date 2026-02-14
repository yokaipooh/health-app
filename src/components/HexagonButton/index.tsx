import type { ComponentType, SVGProps } from 'react';

interface HexagonButtonProps {
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  label: string;
  onClick?: () => void;
}

export const HexagonButton = ({ icon: Icon, label, onClick }: HexagonButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="relative size-[136px] flex flex-col items-center justify-center cursor-pointer transition-transform duration-300 hover:scale-110 group select-none"
    >
      <div
        className="absolute inset-0 bg-gradient-brand shadow-xl mx-2.5 my-0.25"
        style={{
          clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)"
        }}
      />

      <div className="relative z-10 flex flex-col items-center justify-center h-full pb-1">
        <Icon className="w-14 h-14 text-white mb-1" />
        <span className="text-white font-sans text-xl font-normal tracking-wide">{label}</span>
      </div>
    </button>
  );
};
