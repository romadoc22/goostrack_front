import React from 'react';
import { format } from 'date-fns';

import {
  PeriodPaginatorDiv,
  DisplayDataDiv,
  ButtonChangeDate,
  ButtonsChangePeriodDiv,
  Svg,
} from './PeriodPaginator.styled';
const PeriodPaginator = ({ date, period, onClick }) => {
  return (
    <PeriodPaginatorDiv>
      {/* отображение даты в нужном формате */}
      <DisplayDataDiv>
        {period === 'month' && <div>{format(date, 'MMMM yyyy')}</div>}
        {period === 'day' && <div>{format(date, 'dd MMM yyyy')}</div>}
      </DisplayDataDiv>
      {/* кнопки вібора периода */}
      <ButtonsChangePeriodDiv>
        <ButtonChangeDate border="right" onClick={() => onClick(-1, period)}>
          <Svg
            xmlns="http://www.w3.org/2000/svg"
            // width="16"
            // height="16"
            fill="none"
          >
            <path
              // stroke="#DCE3E5"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              d="M10 12 6 8l4-4"
            />
          </Svg>
        </ButtonChangeDate>
        <ButtonChangeDate onClick={() => onClick(1, period)}>
          <Svg
            xmlns="http://www.w3.org/2000/svg"
            // width="16"
            // height="16"
            fill="none"
          >
            <path
              // stroke="#DCE3E5"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              d="m6 12 4-4-4-4"
            />
          </Svg>
        </ButtonChangeDate>
      </ButtonsChangePeriodDiv>
    </PeriodPaginatorDiv>
  );
};
export default PeriodPaginator;

// "1. Компонент отримує в пропсах дату, тип періоду та метод для зміни дати.
// 2. Компонент рендерить розмітку з відформатованим періодом дат в залежності від обраних дати та періоду та блок з кнопками для зміни дати, що збільшують або зменшують період до наступного/попереднього відповідно.
// 3. Клік по кнопках змінює дату в залежності від типу періоду:
//  - month - залишає число поточного дня місяця змінюючи місяць/рік попереднього/наступного місяця
//  - day - змінює дату поточного дня  на дату попереднього/наступного дня
// 4. Компонент форматує період:
//  - month - MARCH 2023
//  - day - 6 MARCH 2023"
