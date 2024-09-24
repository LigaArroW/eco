import { FC } from 'react';

interface ICircleBarProps {
  color: string;
  nameOfValue: string;
  initialValue: number;
  remainderValue: number;
  valueInfinity?: boolean;
}

const CircleProgressBar: FC<ICircleBarProps> = ({
  color,
  nameOfValue,
  initialValue,
  remainderValue,
  valueInfinity = false,
}) => {
  const percent = (remainderValue / initialValue) * 100;

  return (
    <>
      <div className="xs:size-20 relative md:size-40">
        <svg className="size-full -rotate-90" viewBox="0 0 36 36">
          <circle
            cx="18"
            cy="18"
            r="16"
            fill="none"
            className="stroke-current text-gray-200 dark:text-neutral-700"
            strokeWidth="2"
          ></circle>

          <circle
            cx="18"
            cy="18"
            r="16"
            fill="none"
            className={`stroke-current text-[${color}]`}
            strokeWidth="2"
            strokeDasharray="100"
            strokeDashoffset={100 - (!valueInfinity ? percent : 100)}
            strokeLinecap="round"
          ></circle>
        </svg>

        <div className="absolute start-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform items-center justify-center">
          <span className="xs:text-[12px] block text-center font-bold text-[#161616] md:text-[14px]">
            {nameOfValue}
          </span>
          {!valueInfinity ? (
            <span className="xs:text-[10px] block text-[#78829D] md:text-[13px]">
              {remainderValue} из {initialValue}
            </span>
          ) : (
            <span>∞</span>
          )}
        </div>
      </div>
    </>
  );
};

export default CircleProgressBar;
