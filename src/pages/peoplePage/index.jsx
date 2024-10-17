import React from "react";
import { fetchData, characters } from "../../consts";

import styles from "./style.module.css";

const PeoplePage = () => {
  const chars = fetchData(characters)
    .then((data) => console.log(data))
    .catch((error) => console.error(error))
  
  console.log(chars);
  return <div>what</div>;
};

export default PeoplePage;
