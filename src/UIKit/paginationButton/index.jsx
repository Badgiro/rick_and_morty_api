import React from "react";
import styles from "./style.module.css";
import { Button } from "@mui/material";

const PaginationButton = ({ children }) => {
  return (
    <>
      <Button variant="contained">{children}</Button>
    </>
  );
};

export default PaginationButton;
