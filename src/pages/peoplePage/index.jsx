import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMultipleCharacters, fetchPeople } from "../../store/slices/peopleSlice";
import {  CHARACTERS } from "../../constants";

import Pagination from "../../components/pagination";
import PeopleList from "../../components/peoplePage/peopleList";


const PeoplePage = () => {
 
  const dispatch = useDispatch();
  const {results:people, info} = useSelector((state) => state.people.data);
  const cuttedPeople = useSelector((state)=> state.people.fetchMultipleCharacters)

  useEffect(() => {

    dispatch(fetchPeople(CHARACTERS));
    dispatch(fetchMultipleCharacters(`${CHARACTERS}/1,2,3,4,5,6,7,8`))
    
  }, [dispatch]);
  console.log(people)

  return <div>
    <Pagination info={info} />
    {people && <PeopleList people={people} />}
    
    </div>;
};

export default PeoplePage;
