import React from "react";
import { characters, RAM_API } from "../../consts";
import { fetchData } from "../../utils";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import styles from "./style.module.css";
import PeopleList from "./peopleList";
import { addPeople } from "../../store/slices/peoplePageSlice";


const PeoplePage = () => {
  const [people, setPeople] = useState([])
  const dispatch = useDispatch()
  const chars = async (url) => {
    const res = await fetchData(url)
    if(res) {
      const charsList = res.results.map(({id, image, name, species})=>{
        return{ 
          image,
          name,
          species,
          id
        }
        
        
      })
      setPeople(charsList)
      dispatch(addPeople({people:charsList}))

     


    }
  
  }
  useEffect(()=> {
    chars(characters)
  },[])

 
  return <div>
    {
      people&& <PeopleList/>
    }
  </div>;
};

export default PeoplePage;
