import { useEffect, useState } from "react";

import { useLocation } from "react-router-dom";
import { numberOfItems } from "../../services"; 
import PaginationPage from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import styles from "./style.module.css";

const Pagination = ({ info, count, multipleItemsFetch }) => {
  const [list, setList] = useState([]);
  const [currentPage, setCurrentPage] = useState(
    () => parseInt(sessionStorage.getItem("currentPage"), 10) || 1
  );

  const location = useLocation();


  const updateList = (numberOfItems) => {
    const listOfIds = (currentPage - 1) * numberOfItems + 1;
    const newList = Array.from(
      { length: numberOfItems },
      (_, i) => i + listOfIds
    );
    setList(newList);
    return multipleItemsFetch(newList);
  };

  useEffect(() => {
    setCurrentPage(1);
    setList(list);
  }, [location.pathname]);

  useEffect(() => {
    updateList(count);
    sessionStorage.setItem("currentPage", currentPage);
  }, [currentPage, count]);
  console.log(info)
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
