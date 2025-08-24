import { ComponentProps, useId } from 'react';

type SliderProps = Omit<ComponentProps<'input'>, 'type'> & {
  label: string;
};

export function Slider({ label, id, className, ...props }: SliderProps) {
  const autoId = useId();
  const finalId = id ?? autoId;


  const value = Number(props.value ?? 0);
  const min = Number(props.min ?? 0);
  const max = Number(props.max ?? 100);
  const percentage = ((value - min) / (max - min)) * 100;

  return (
    <div className="space-y-2">
      <label
        htmlFor={finalId}
        className="text-sm font-medium text-gray-700 dark:text-gray-300 block"
      >
        {label}
      </label>
      <input
        id={finalId}
        type="range"
        className={`w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer slider focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800 ${className || ''}`}
        style={{
          background: `linear-gradient(to right, #6366f1 0%, #6366f1 ${percentage}%, #e5e7eb ${percentage}%, #e5e7eb 100%)`,
        }}
        {...props}
      />
      <style jsx>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: #6366f1;
          cursor: pointer;
          border: 2px solid #ffffff;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }
        .slider::-moz-range-thumb {
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: #6366f1;
          cursor: pointer;
          border: 2px solid #ffffff;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }
        .dark .slider::-webkit-slider-thumb {
          border-color: #1f2937;
        }
        .dark .slider::-moz-range-thumb {
          border-color: #1f2937;
        }
      `}</style>
    </div>
  );
}
