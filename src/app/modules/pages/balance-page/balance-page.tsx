import { FC, useState } from 'react';

import { PageTitle } from '../../ui/page-title';
import { Card } from '../../ui/card';
import HeaderSelect from '../../ui/header-select/header-select';
import ModalBalance from '../../ui/modals/modal-balance';

import config from '../../../../../auxuliary.json';
import TextField from '../../ui/fields/text-field';

import button from '../../../assets/images/button.svg';
import qr from '../../../assets/images/qr-code.svg';

interface IBalanceItem {
  date: string;
  method: string;
  sum: string;
}

const BalancePage: FC = () => {
  const [qtyApps, setQty] = useState<number>(4);
  const [value, setValue] = useState<string>('');

  // const [openModal, setOpenModal] = useState<boolean>(false);
  return (
    <>
      <div className="h-full w-full p-[40px] px-[45px]">
        <PageTitle title="Пополнение баланса" />
        <Card>
          <div className="take-balance flex flex-row justify-between">
            <div className="take-balance-left">
              {' '}
              <HeaderSelect
                label="Телефон"
                addStyle="flex flex-col mb-[20px]"
                selectStyle="border-1 h-[40px] w-[290px]"
              />
              <TextField
                id="balance-sum"
                type="text"
                Label="Сумма платежа"
                placeholder="введите сумму"
                value={value}
                onChangeCb={(e) => setValue(e.target.value.trim())}
              />
              <div className="">
                <button
                  className="btn btn-link my-[40px] text-[#005DA6] no-underline"
                  data-modal-toggle="#modal_5"
                  // onClick={() => setOpenModal(true)}
                >
                  Как сформирован рекомендованный платеж?
                </button>
              </div>
              <div className="hover:cursor-pointer">
                <img src={button} alt="buttonPay" />
              </div>
            </div>
            <div className="take-balance-right w-[40%]">
              <p className="mb-[20px] text-[13px] font-semibold text-[#071437]">
                Для оплаты отсканируйте QR-код в мобильном приложении банка или
                штатной камерой телефона
              </p>
              <img src={qr} alt="qr-code" />
            </div>
          </div>
        </Card>

        <Card>
          <table className="table align-middle text-sm font-medium text-gray-700">
            <thead>
              <tr>
                <th>Дата операции</th>
                <th>Способ оплаты</th>
                <th>Сумма</th>
              </tr>
            </thead>
            <tbody>
              {config.balance.map((item: IBalanceItem, index) => {
                if (index > qtyApps) return;
                return (
                  <tr className="" key={index}>
                    <td>{item.date}</td>
                    <td>{item.method}</td>
                    <td>{item.sum}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <div className="w-full border-t-2 py-[10px] text-center">
            <a
              className="btn btn-link text-[#005DA6]"
              onClick={() =>
                setQty(() => {
                  return qtyApps + (config.applicTable.length - qtyApps);
                })
              }
            >
              Смотреть все
            </a>
          </div>
        </Card>
      </div>
      <ModalBalance />
    </>
  );
};

export default BalancePage;
