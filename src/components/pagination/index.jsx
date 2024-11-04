import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CHARACTERS } from "../../constants";
import { fetchMultipleCharacters } from "../../store/slices/peopleSlice";
import { numberOfItems } from "../../services";
import PaginationPage from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import styles from "./style.module.css";

const Pagination = ({ info, count, multipleItemsFetch }) => {
  const [listOfItems, setListOfItems] = useState([]);
  const dispatch = useDispatch();

  const [currentPage, setCurrentPage] = useState(() => {
    return parseInt(sessionStorage.getItem("currentPage"), 10) || 1;
  });
  const list = [];
  const multipleFetch = (numberOfItems, arrOfItems) => {
    const listOfIds = (currentPage - 1) * numberOfItems + 1;
    for (let i = 0; i < numberOfItems; i++) {
      arrOfItems.push(i + listOfIds);
    }
    return multipleItemsFetch(list);
  };

  useEffect(() => {
    multipleFetch(count, list);
    sessionStorage.setItem("currentPage", currentPage);
  }, [dispatch, currentPage]);

  return (
    <div className={styles.pagination}>
      <PaginationPage
        count={numberOfItems(count, info)}
        page={currentPage}
        onChange={(event, value) => setCurrentPage(value)}
        renderItem={(item) => (
          <PaginationItem
            slots={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
            {...item}
          />
        )}
      />
    </div>
  );
};

export default Pagination;
