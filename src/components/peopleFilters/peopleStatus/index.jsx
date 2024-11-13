import { MenuItem, Select } from '@mui/material'
import { useDispatch } from 'react-redux'

const PeopleFilter = ({
  searchParams,
  setSearchParams,
  searchItems,
  setTypeOfSearch,
  paramName,
}) => {
  const dispatch = useDispatch()
  const onParamChange = (newValue) => {
    const params = { ...Object.fromEntries(searchParams) }

    if (!newValue) {
      delete params[paramName]
    } else {
      params[paramName] = newValue
    }

    setSearchParams(params)
    dispatch(setTypeOfSearch(newValue))
  }

  return (
    <Select
      defaultValue=""
      onChange={(e) => onParamChange(e.target.value)}
      displayEmpty
    >
      <MenuItem value="">All</MenuItem>
      {searchItems &&
        searchItems.map((item) => (
          <MenuItem key={item} value={item.toLowerCase()}>
            {item}
          </MenuItem>
        ))}
    </Select>
  )
}

export default PeopleFilter
