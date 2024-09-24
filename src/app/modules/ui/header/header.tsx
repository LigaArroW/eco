import React, { FC } from 'react';

import icongosu from '../../../assets/images/gosu.svg';
import notifGreen from '../../../assets/images/notif-green.svg';
import notifRed from '../../../assets/images/notif-red.svg';

import HeaderSelect from '../header-select/header-select';

interface IHeaderProps {
  changeVis: React.Dispatch<React.SetStateAction<boolean>>;
}

const Header: FC<IHeaderProps> = ({ changeVis }) => {
  return (
    <header className="flex h-full w-full items-center bg-[#F6F8F8] px-[45px] pt-5 sm:justify-center lg:justify-start">
      <button
        className="btn md:hidden"
        onClick={() => changeVis((prev) => !prev)}
      >
        Меню
      </button>
      <div className="flex w-full sm:justify-center lg:justify-start">
        <HeaderSelect label="Мои номера:" />
        <div className="icons flex items-center">
          <div className="gosuslugi relative mx-[10px] cursor-pointer items-center rounded-[8px] bg-[#fff] p-[5px]">
            <img className="w-[22px]" src={icongosu} alt="ГосУслуги" />
            <img
              className="absolute right-1 top-1"
              src={notifGreen}
              alt="notification"
            />
          </div>
          <div className="notif relative cursor-pointer items-center rounded-[8px] bg-[#fff] p-[5px] text-[22px] leading-[20px] text-[#78829D]">
            <i className="ki-outline ki-notification"></i>
            <img
              className="absolute right-1 top-1"
              src={notifRed}
              alt="notification"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
