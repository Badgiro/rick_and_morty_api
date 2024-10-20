import React from "react";
import {characters } from "../../consts";
import { fetchData } from "../../utils";
import { useState, useEffect } from "react";

import styles from "./style.module.css";
import PaginationButton from "../../UIKit/paginationButton";

const PeoplePage = () => {
  const [people, setPeople] = useState([])
  const chars = async (url) => {
    const res = await fetchData(url)
    console.log(res)
  }
  useEffect(()=> {
    chars(characters)
  },[])

 
  return <div>
    {
      <PaginationButton>Load More</PaginationButton>
    }
  </div>;
};

export default PeoplePage;
