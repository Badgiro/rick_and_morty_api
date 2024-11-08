import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { fetchPeople } from "../../store/slices/peopleSlice";
import { CHARACTERS } from "../../constants";

const FilterForm = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const dispatch = useDispatch();

  // Обработчик отправки формы фильтрации
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const query = form.search.value;

    // Устанавливаем query параметры в URL
    setSearchParams({ name: query });

    // Отправляем запрос на сервер с новыми параметрами фильтрации
    dispatch(fetchPeople(`${CHARACTERS}?name=${query}`));  // Запрос с параметром фильтрации
  };

  return (
    <form autoComplete="off" onSubmit={handleSubmit}>
      <input type="search" name="search" />
      <input type="submit" value="Search" />
    </form>
  );
};
export default FilterForm