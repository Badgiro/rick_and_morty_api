import { useEffect, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useSearchParams } from 'react-router-dom'
import { LOCATIONS, RAM_PARAM_PAGE } from '../../constants'
import { fetchLocations } from '../../store/slices/locationsSlice'
import LocationsList from '../../components/locationsPage/locationsList'
import { setType, setDimension } from '../../store/slices/locationsSlice'
import PageLogo from '../../components/pageLogo'
import LocationSorting from '../../components/locationSorting'
import logo from '../../assets/images/png/rick-and-morty-locations.png'
import styles from './style.module.css'
import Pagination from '../../components/pagination'

const LocationsPage = () => {
  const statusData = useSelector((state) => state.locations)
  const [searchParams, setSearchParams] = useSearchParams()
  const dispatch = useDispatch()
  const { results: locations = [], info = null } = useSelector(
    (state) => state.locations.data || { results: [], info: null }
  )

  const { type, dimension } = useMemo(
    () => ({
      type: statusData.type,
      dimension: statusData.dimension,
    }),
    [statusData]
  )
  console.log(locations)
  const fetchCutedLocations = (arr) =>
    dispatch(
      fetchLocations(
        `${LOCATIONS}/${RAM_PARAM_PAGE}${arr.toString()}&${searchParams.toString()}`
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
    if (dimension) params.dimension = dimension
    if (type) params.type = type

    setSearchParams(params)
  }

  useEffect(() => {
    dispatch(fetchLocations(`${LOCATIONS}?${searchParams.toString()}`))
  }, [dispatch, searchParams])

  return (
    <div className={styles.locationsPage}>
      <PageLogo logo={logo} />
      <div  className={styles.locationsSorting}>
        <LocationSorting
         
          handleSubmit={handleSubmit}
          searchParams={searchParams}
          setSearchParams={setSearchParams}
          onSearchChange={handleSearchChange}
        />
      </div>

      {locations.length > 0 ? (
        <LocationsList locations={locations} />
      ) : (
        <p>Not found</p>
      )}

      {info && (
        <Pagination multipleItemsFetch={fetchCutedLocations} info={info} />
      )}
    </div>
  )
}

export default LocationsPage
