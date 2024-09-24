import { FC, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { WarningBadge } from '../../ui';
import CircleProgressBar from '../../ui/circle-progress-bar/circle-progress-bar';
import ServicesButton from '../../ui/services-button/services-button';

import config from '../../../../../auxuliary.json';

type ExpensesCalc = {
  communications: number;
  services: number;
  other: number;
};

const MainPage: FC = () => {
  const [visibleTab, setVisibleTab] = useState<boolean>(true);

  // temp example
  const [expenses, setExpenses] = useState<ExpensesCalc>({
    communications: 752,
    services: 215,
    other: 300,
  });

  const sum = expenses.communications + expenses.services + expenses.other;
  const perOne = expenses.communications / sum;
  const perTwo = expenses.services / sum;
  const perThree = expenses.other / sum;
  // temp example

  const navigate = useNavigate();
  return (
    <div className="main-page py-[8px]">
      <WarningBadge
        title="Требуется подтверждение"
        message="Требуется подтверждение номера на Госуслугах."
        buttonText="Подтвердить"
      />

      <div className="xs:mx-[20px] xs:mb-[20px] card grid grid-cols-2 flex-row md:mx-[45px] md:mb-[40px]">
        <div className="card-body">
          <p className="xs:text-[15px] font-semibold md:text-[22px]">
            Петров Константин Александрович
          </p>
          <a
            className="btn btn-link text-[13px] text-[#005DA6]"
            href="#"
            onClick={() => navigate('/main/profile')}
          >
            Профиль
          </a>
        </div>
        <div className="xs:flex-col xs:mr-[10px] card-body my-[20px] flex border-b-2 border-[#EAECEE] pt-[5px] md:mr-[40px] md:flex-row">
          <div className="xs:text-[12px] font-semibold text-[#071437] md:text-[18px]">
            +7 (999) 853-40-23
          </div>
          <div className="ml-[15px]">
            <span className="badge badge-outline badge-success">Активен</span>?
            <span className="badge badge-outline">Заблокирован</span>
          </div>
        </div>

        <div className="card-body pt-[30px]">
          <p className="mb-[5px] text-[13px] text-[#78829D]">Мой тариф</p>
          <p className="tarif mb-[5px] text-[16px] font-semibold text-[#071437]">
            Интернет 50 Гб за 200
          </p>
          <a className="btn btn-link text-[#005DA6]" href="#">
            Подробнее
          </a>
        </div>

        <div className="xs:justify-self-end xs:pr-[40px] card-body px-[0] md:justify-self-start">
          <p className="mb-[5px] text-[13px] text-[#78829D]">Мой баланс</p>
          <p className="xs:text-[20px] mb-[5px] font-semibold text-[#071437] md:text-[30px]">
            250 ₽
          </p>
          <button className="btn bg-[#005DA6] text-[#fff]">Пополнить</button>
        </div>
      </div>

      <div className="xs:gap-5 xs:mx-[20px] grid grid-cols-2 md:mx-[0] md:gap-10 md:px-[45px]">
        <div className="card">
          <div className="card-header">
            <h3 className="card-title">Остатки по пакетам</h3>
          </div>
          <div className="xs:flex-col xs:items-center card-body flex flex-row justify-between md:flex-row">
            <CircleProgressBar
              color="#005DA6"
              nameOfValue="Мин"
              initialValue={300}
              remainderValue={210}
            />
            <CircleProgressBar
              color="#5890BC"
              nameOfValue="СМС"
              initialValue={100}
              remainderValue={60}
            />
            <CircleProgressBar
              color="#A8B1C3"
              nameOfValue="ГБ"
              initialValue={500}
              remainderValue={300}
              valueInfinity={true}
            />
          </div>
          <div className="card-footer justify-center">
            <a className="btn btn-link text-[#005DA6]" href="#">
              Подробнее
            </a>
          </div>
        </div>

        <div className="xs:mb-[10px] card">
          <div className="card-header">
            <h3 className="card-title">Расходы текущего периода</h3>
          </div>
          <div className="card-body">
            <div className="sum mb-[10px] text-[30px] font-semibold">
              {sum} ₽
            </div>
            <div className="progress py-[5px]">
              <div
                className="progress-bar mr-[5px] rounded-[3px] bg-[#005DA6] py-[5px]"
                style={{ width: `${perOne * 100}%` }}
              ></div>
              <div
                className="progress-bar mr-[5px] rounded-[3px] bg-[#FFCC00] py-[5px]"
                style={{ width: `${perTwo * 100}%` }}
              ></div>
              <div
                className="progress-bar rounded-[3px] bg-[#5890BC] py-[5px]"
                style={{ width: `${perThree * 100}%` }}
              ></div>
            </div>

            <div className="explanation xs:flex-col mt-[20px] flex">
              <div className="information flex items-center text-[12px] font-medium md:mr-[15px]">
                <span className="badge badge-dot size-2.5 bg-[#005DA6] md:mr-[5px]"></span>
                <span className="md:mr-[5px]">Связь</span>
                <span>{expenses.communications}₽</span>
              </div>

              <div className="information flex items-center text-[12px] font-medium md:mr-[15px]">
                <span className="badge badge-dot size-2.5 bg-[#FFCC00] md:mr-[5px]"></span>
                <span className="md:mr-[5px]">Услуги</span>
                <span>{expenses.services}₽</span>
              </div>

              <div className="information mr-[15px] flex items-center text-[12px] font-medium">
                <span className="badge badge-dot size-2.5 bg-[#5890BC] md:mr-[5px]"></span>
                <span className="md:mr-[5px]">Другое</span>
                <span>{expenses.other}₽</span>
              </div>
            </div>
          </div>
          <div className="card-footer justify-center">
            <a className="btn btn-link text-[#005DA6]" href="#">
              Посмотреть все
            </a>
          </div>
        </div>

        <div className="xs:w-[90vw] md:w-[auto]">
          <div className="card">
            <div className="card-header">
              <h3 className="card-title">Мои услуги</h3>
            </div>
            <div className="card-body">
              <div>
                <div className="tabs mb-5" data-tabs="true ">
                  <button
                    className={`${visibleTab ? 'active' : null} tab text-[14px] text-[#4B5675]`}
                    data-tab-toggle="#tab_1_1"
                    onClick={() => setVisibleTab(true)}
                  >
                    Без абонентской платы
                  </button>
                  <button
                    className={`${!visibleTab ? 'active' : null} tab text-[14px] text-[#4B5675]`}
                    data-tab-toggle="#tab_1_2"
                    onClick={() => setVisibleTab(false)}
                  >
                    С абонентской платой
                  </button>
                </div>
                {visibleTab ? (
                  <div className="" id="tab_1_1">
                    {config.buttons.map((itm, idx) => {
                      return <ServicesButton key={idx} name={itm.name} />;
                    })}
                  </div>
                ) : (
                  <div className="" id="tab_1_2">
                    Пока что здесь нет тарифов
                  </div>
                )}
              </div>
            </div>
            <div className="card-footer justify-center">
              <a className="btn btn-link text-[#005DA6]" href="#">
                Посмотреть все
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
