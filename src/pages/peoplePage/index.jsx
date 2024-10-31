import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPeople } from '../../store/slices/peopleSlice'
import { CHARACTERS } from '../../constants'
import Pagination from '../../components/pagination'
import PeopleList from '../../components/peoplePage/peopleList'
import styles from './style.module.css'

const PeoplePage = () => {
  const dispatch = useDispatch()
  const { results: people, info } = useSelector((state) => state.people.data)

  useEffect(() => {
    dispatch(fetchPeople(CHARACTERS))
  }, [dispatch])

  return (
    <div className={styles.people}>
      {people && <PeopleList people={people} />}
      {info && <Pagination info={info} />}
    </div>
  )
}

export default PeoplePage
