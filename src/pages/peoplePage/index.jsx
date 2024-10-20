import React from "react";
import {characters } from "../../consts";
import { fetchData } from "../../utils";
import { useState, useEffect } from "react";

import styles from "./style.module.css";


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
      
    }
  </div>;
};

export default PeoplePage;
