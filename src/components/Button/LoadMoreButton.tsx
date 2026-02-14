import type { ButtonHTMLAttributes } from 'react';

interface LoadMoreButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string;
}

export const LoadMoreButton = ({ label = '記録をもっと見る', className = '', ...props }: LoadMoreButtonProps) => {
  return (
    <div className="flex justify-center mt-6">
      <button
        style={{
          background: 'linear-gradient(90deg, #FFCC21 0%, #FF963C 100%)'
        }}
        className={`
          w-[296px] h-[56px] 
          text-light font-jp text-lg font-light leading-[26px]
          rounded-[4px] 
          hover:opacity-80 transition-opacity 
          cursor-pointer
          ${className}
        `}
        {...props}
      >
        {label}
      </button>
    </div>
  );
};
