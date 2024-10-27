import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPeople } from "../../store/slices/peopleSlice";
import { characters, RAM_PARAM_PAGE } from "../../constants";


import PeopleList from "../../components/peoplePage/peopleList";

const PeoplePage = () => {
  const dispatch = useDispatch();
  const people = useSelector((state) => state.people.data);

  useEffect(() => {
    dispatch(fetchPeople(characters+RAM_PARAM_PAGE+'1'));
  }, [dispatch]);

  return <div>{people && <PeopleList people={people} />}</div>;
};

export default PeoplePage;
