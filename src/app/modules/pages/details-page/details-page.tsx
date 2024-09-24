import { FC, useState } from 'react';

import TextField from '../../ui/fields/text-field';
import { PageTitle } from '../../ui/page-title';
import { Card } from '../../ui/card';

const DetailsPage: FC = () => {
  const [userInfo, setUserInfo] = useState({
    email: '',
  });
  return (
    <div className="xs:p-[18px] h-full w-full px-[45px] md:p-[40px]">
      <PageTitle title="Детализация" />
      <Card cardTitle="Запрос деталиции">
        <>
          <div className="details-info pt-[15px] text-[14px] font-medium text-[#4B5675]">
            В прошлый раз вы заказывали детализацию: [DATE VARIABLE]
          </div>
          <div className="details-format py-[15px] text-[14px] font-medium text-[#4B5675]">
            Отчет отправляется на электронную почту в формате xlsx
          </div>
          <div className="details-select mt-[20px] md:w-[23vw]">
            <label className="form-label mb-[5px] block max-w-32 text-left text-sm font-medium text-[#161616] dark:text-white">
              Период
            </label>
            <select className="select">
              <option value="">[PERIOD VARIABLES]</option>
              <option value="">[PERIOD VARIABLES]</option>
              <option value="">[PERIOD VARIABLES]</option>
              <option value="">[PERIOD VARIABLES]</option>
            </select>
          </div>
          <div className="my-[15px]">
            <TextField
              id="detail-mail"
              type="email"
              placeholder="e-mail"
              value={userInfo.email}
              onChangeCb={(e) => setUserInfo({ email: e.target.value.trim() })}
              Label="Почта"
              width="md:w-[23vw]"
              addStyle="md:w-[23vw]"
            />
          </div>
          <div className="details-select md:w-[23vw]">
            <label className="form-label mb-[5px] block max-w-32 text-left text-sm font-medium text-[#161616] dark:text-white">
              Формат
            </label>
            <select className="select md:w-[23vw]">
              <option value="">[FORMAT VARIABLES]</option>
              <option value="">[FORMAT VARIABLES]</option>
              <option value="">[FORMAT VARIABLES]</option>
              <option value="">[FORMAT VARIABLES]</option>
            </select>
          </div>
          <button className="btn mt-[40px] justify-center bg-[#005DA6] font-sans font-medium text-[#F6F8F8] sm:text-[10px] md:w-[23vw] md:text-[13px]">
            Создать заявку на детализацию расходов
          </button>
        </>
      </Card>
    </div>
  );
};

export default DetailsPage;
