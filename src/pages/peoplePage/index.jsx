import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useSearchParams } from 'react-router-dom'
import { fetchPeople } from '../../store/slices/peopleSlice'
import { CHARACTERS, RAM_PARAM_PAGE} from '../../constants'
import Pagination from '../../components/pagination'
import PeopleList from '../../components/peoplePage/peopleList'
import styles from './style.module.css'
import PageLogo from '../../components/pageLogo'
import logo from '../../assets/images/png/rick-and-morty.png'

const PeoplePage = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const dispatch = useDispatch()
  const { results: people, info } = useSelector((state) => state.people.data)

  const fetchCutedPersons = (arr) =>
    dispatch(fetchPeople(`${CHARACTERS}/${RAM_PARAM_PAGE}${arr.toString()}&${searchParams.toString()}`))

  const namesQuery = searchParams.get('name') || ''
  const handleSubmit = (e) => {
    e.preventDefault()
    const form = e.target
    const query = form.search.value
    setSearchParams({ name: query })
  }

  useEffect(() => {
    dispatch(fetchPeople(`${CHARACTERS}?${searchParams.toString()}`))
  }, [dispatch, info?.count, searchParams])

  return (
    <div className={styles.people}>
      <PageLogo logo={logo} />
      <form autoComplete="off" onSubmit={handleSubmit} action="">
        <input type="search" name="search" />
        <input type="submit" value="Search" />
      </form>
      {people && info && <PeopleList filter={namesQuery} />}
      {info && people && (
        <Pagination multipleItemsFetch={fetchCutedPersons} info={info} />
      )}
    </div>
  )
}

export default PeoplePage
