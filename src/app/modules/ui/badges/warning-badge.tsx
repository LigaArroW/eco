import { FC } from 'react';

interface IWarningBadge {
  title: string;
  message: string;
  buttonText: string;
}

const WarningBadge: FC<IWarningBadge> = ({ title, message, buttonText }) => {
  return (
    <div className="warning mb-[30px] flex h-[68px] w-full flex-row items-center justify-between bg-[#FFF8DD] md:px-[45px]">
      <div className="flex items-center justify-between">
        <div className="warning-icon xs:mr-[10px]">
          <i className="ki-duotone ki-shield-cross text-[30px] text-[#F6B100]"></i>
        </div>
        <div className="warning-content flex flex-row">
          <div className="warning-text sm:flex-row">
            <div className="warning-title xs:text-[12px] font-semibold text-[#252F4A] md:text-[15px]">
              {title}
            </div>
            <div className="warning-message xs:hidden text-[13px] font-medium text-[#78829D] md:block">
              {message}
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center">
        <div className="warning-button xs:mr-[20px] sm:mr-[1px] md:mr-[100px]">
          <button className="xs:p-[5px] btn btn-warning">{buttonText}</button>
        </div>
        <div className="warning-arrow">
          <i className="ki-filled ki-right text-[28px]"></i>
        </div>
      </div>
    </div>
  );
};

export default WarningBadge;
