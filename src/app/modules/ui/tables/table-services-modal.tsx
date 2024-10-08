import { FC } from "react";
import { defaultStyles } from "../../../utils/default-styles";

const TableServicesModal: FC = () => {
  const { textSize, textColor } = defaultStyles;
  return (
    <table className={`table align-middle ${textSize.default} text-sm font-medium ${textColor.grey}`}>
      <tbody>
        <tr>
          <td>Дата и время</td>
          <td>24.07.2024, 00:53</td>
        </tr>
        <tr>
          <td>Сумма</td>
          <td>0,80</td>
        </tr>
        <tr>
          <td>Тип</td>
          <td>Платеж</td>
        </tr>
        <tr>
          <td>Способ</td>
          <td>Перенос денежных средств между номерами</td>
        </tr>
        <tr>
          <td>Номер</td>
          <td>96929420</td>
        </tr>
      </tbody>
    </table>
  );
};

export default TableServicesModal;
