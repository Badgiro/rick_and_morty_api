import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CHARACTERS } from "../../constants";
import { fetchMultipleCharacters } from "../../store/slices/peopleSlice";

const Pagination = ({ info }) => {
  const dispatch = useDispatch();
  const ratio = info && info.count && Math.ceil(info.count / 8);
  const pages = ratio && Array.from(Array(ratio + 1).keys());
  const multipleCharacters = useSelector(
    (state) => state.people.multipleCharacters
  );
  console.log(multipleCharacters);
  if (pages) pages.shift();

  const handleClick = (currentPage) => {
    const listOfIds = (currentPage - 1) * 8 + 1;

    const list = [];

    for (let i = 0; i < 8; i++) {
      list.push(i + listOfIds);
    }

    dispatch(fetchMultipleCharacters(CHARACTERS + "/" + list));
  };

  return (
    <div>
      <ul>
        {pages &&
          pages.map((item) => {
            return (
              <span onClick={() => handleClick(item)} key={item}>
                {item}
              </span>
            );
          })}
      </ul>
    </div>
  );
};

export default Pagination;
