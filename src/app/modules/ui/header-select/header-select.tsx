import { FC } from 'react';

interface IHeaderSelectProps {
  label: string;
  addStyle?: string;
  selectStyle?: string;
}

type TempExampleForOption = {
  optionText: string;
  disabled: boolean;
  bold?: boolean;
};

const exampleArr: TempExampleForOption[] = [
  { optionText: 'Группа 1', disabled: true, bold: true },
  { optionText: '+7 (900) 123-45-61', disabled: false },
  { optionText: '+7 (900) 123-45-62', disabled: false },
  { optionText: '+7 (900) 123-45-63', disabled: false },
  { optionText: 'Группа 2', disabled: true, bold: true },
  { optionText: '+7 (900) 123-45-64', disabled: false },
];

const HeaderSelect: FC<IHeaderSelectProps> = ({
  label,
  addStyle,
  selectStyle,
}) => {
  return (
    <div
      className={`flex flex-wrap items-baseline gap-2.5 rounded-[8px] lg:flex-nowrap ${addStyle}`}
    >
      <label className="xs:hidden form-label max-w-32 font-medium text-[#161616] md:block">
        {label}
      </label>
      <select
        className={`xs:w-[170px] select ml-[-30px] h-[32px] rounded-[8px] hover:cursor-pointer md:w-[230px] ${selectStyle}`}
        name="select"
      >
        {exampleArr.map((itm, idx) => {
          return (
            <option
              className={`${itm.bold ? 'font-semibold' : null} hover:cursor-pointer`}
              value={itm.optionText}
              key={idx}
              disabled={itm.disabled}
            >
              {itm.optionText}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default HeaderSelect;
