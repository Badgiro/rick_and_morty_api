import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPeople, fetchMultipleCharacters } from '../../store/slices/peopleSlice'
import { CHARACTERS } from '../../constants'
import Pagination from '../../components/pagination'
import PeopleList from '../../components/peoplePage/peopleList'
import styles from './style.module.css'
import PageLogo from '../../components/pageLogo'
import logo from '../../assets/images/png/rick-and-morty.png'

const PeoplePage = () => {
  const dispatch = useDispatch()
  const { results: people, info } = useSelector((state) => state.people.data)
  const fetchCutedPersons =(arr)=>  dispatch(fetchMultipleCharacters(`${CHARACTERS}/${arr}`))
  
  useEffect(() => {
    dispatch(fetchPeople(CHARACTERS))
  }, [dispatch])

  return (
    <div className={styles.people}>
      <PageLogo logo={logo} /> 
      {people && <PeopleList people={people} />}
      {info && <Pagination multipleItemsFetch={fetchCutedPersons}  info={info} count={8} />}
    </div>
  )
}

export default PeoplePage
