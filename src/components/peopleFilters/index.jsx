import PeopleSearch from './peopleSearch'
import PeopleStatus from './peopleStatus'
import { peopleTypeOfFilter } from '../../services'
import { setStatus } from '../../store/slices/peopleSlice'


const PeopleFilters = ({
  handleSubmit,
  onStatusChange,
  searchParams,
  onSearchChange,
  setSearchParams
}) => {
 
  return (
    <form
      autoComplete="off"
      onSubmit={handleSubmit}
      style={{ display: 'flex' }}
    >
      <PeopleSearch onSearchChange={onSearchChange} />
      <PeopleStatus
        searchParams={searchParams}
        onStatusChange={onStatusChange}
        setSearchParams={setSearchParams}
        searchItems = {peopleTypeOfFilter.status}
        setTypeOfSearch = {setStatus}
        paramName ={'status'}

      />
    </form>
  )
}

export default PeopleFilters
