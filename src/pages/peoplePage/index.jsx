import { useEffect, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useSearchParams } from 'react-router-dom'
import { fetchPeople, setStatus } from '../../store/slices/peopleSlice'
import { CHARACTERS, RAM_PARAM_PAGE } from '../../constants'
import Pagination from '../../components/pagination'
import PeopleList from '../../components/peopleList'
import styles from './style.module.css'
import PageLogo from '../../components/pageLogo'
import logo from '../../assets/images/png/rick-and-morty.png'
import PeopleFilters from '../../components/peopleFilters'

const PeoplePage = () => {
  const statusData = useSelector((state) => state.people)
  const [searchParams, setSearchParams] = useSearchParams()
  const dispatch = useDispatch()
  const { results: people = [], info = null } = useSelector(
    (state) => state.people.data || { results: [], info: null }
  )
 

  const { status, gender, species } = useMemo(
    () => ({
      status: statusData.status,
      gender: statusData.gender,
      species: statusData.species
    }),
    [statusData]
  )
  const fetchCutedPersons = (arr) =>
    dispatch(
      fetchPeople(
        `${CHARACTERS}/${RAM_PARAM_PAGE}${arr.toString()}&${searchParams.toString()}`
      )
    )

  const handleSearchChange = (e) => {
    const query = e.target.value
    const params = { ...Object.fromEntries(searchParams) }

    if (query) {
      params.name = query
    } else {
      delete params.name
    }

    setSearchParams(params)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const form = e.target
    const query = form.search.value
    const params = {}
    if (query) params.name = query
    if (status) params.status = status
    if(gender) params.gender = gender
    if(species) params.species = species

    setSearchParams(params)
  }

  useEffect(() => {
    dispatch(fetchPeople(`${CHARACTERS}?${searchParams.toString()}`))
  }, [dispatch, searchParams])

  return (
    <div className={styles.people}>
      <PageLogo logo={logo} />
      <PeopleFilters
        handleSubmit={handleSubmit}
        searchParams={searchParams}
        setSearchParams={setSearchParams}
       
        onSearchChange={handleSearchChange}
      />
      {people && info && <PeopleList />}
      {info && people && (
        <Pagination multipleItemsFetch={fetchCutedPersons} info={info} />
      )}
    </div>
  )
}

export default PeoplePage
