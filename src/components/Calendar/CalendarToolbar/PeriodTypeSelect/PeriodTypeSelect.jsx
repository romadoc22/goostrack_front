const PeriodTypeSelect = ({ onClick }) => {
  return (
    <div>
      <button onClick={() => onClick('month')}>Momth </button>
      <button onClick={() => onClick('day')}>Day </button>
    </div>
  );
};
export default PeriodTypeSelect;
// "1. Компонент рендерить блок навігації для переадресацї юзера на таблицю з задачами відповідно до обраного типу періоду day | month.
// 2. Кнопка що вказує поточний тип обраного періоду має активні стилі, як показано на макеті."
