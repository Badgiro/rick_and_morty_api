import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPeople } from '../../store/slices/peoplePageSlice';

import styles from './style.module.css';
import PeopleList from '../../components/peoplePage/peopleList';

const PeoplePage = () => {
  const dispatch = useDispatch();
  const people = useSelector((state) => state.people.data);

  useEffect(() => {
    dispatch(fetchPeople());
  }, [dispatch]);

  return <div>{people && <PeopleList people={people} />}</div>;
};

export default PeoplePage;