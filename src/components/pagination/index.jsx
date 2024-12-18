import { useEffect, useState } from "react";

import { useLocation } from "react-router-dom";
import { numberOfItems } from "../../services";
import PaginationPage from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import styles from "./style.module.css";

const Pagination = ({ info, multipleItemsFetch }) => {
  const [currentPage, setCurrentPage] = useState(
    () => parseInt(sessionStorage.getItem("currentPage"), 10) || 1
  );

  const location = useLocation();

  const updateList = (pageNumber) => {
    multipleItemsFetch(pageNumber);
  };

  useEffect(() => {
    setCurrentPage(1);
  }, [location.pathname]);

  useEffect(() => {
    currentPage && updateList(currentPage);
    sessionStorage.setItem("currentPage", currentPage);
  }, [currentPage]);

  return (
    <div className={styles.pagination}>
      <PaginationPage
        count={info.pages}
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
