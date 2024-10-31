import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { CHARACTERS } from '../../constants'
import { fetchMultipleCharacters } from '../../store/slices/peopleSlice'
import PaginationPage from '@mui/material/Pagination'
import PaginationItem from '@mui/material/PaginationItem'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import styles from './style.module.css'

const Pagination = ({ info }) => {
  const dispatch = useDispatch()

  const [currentPage, setCurrentPage] = useState(() => {
    return parseInt(sessionStorage.getItem('currentPage'), 10) || 1
  })

  const ratio = info && info.count && Math.ceil(info.count / 8)
  const pages = ratio && Array.from(Array(ratio + 1).keys())
  if (pages) pages.shift()

  const multipleCharacters = useSelector(
    (state) => state.people.multipleCharacters
  )
  console.log(multipleCharacters)

  useEffect(() => {
    const listOfIds = (currentPage - 1) * 8 + 1
    const list = []

    for (let i = 0; i < 8; i++) {
      list.push(i + listOfIds)
    }

    dispatch(fetchMultipleCharacters(`${CHARACTERS}/${list}`))
    sessionStorage.setItem('currentPage', currentPage) 
  }, [dispatch, currentPage])

  const handleClick = (page) => {
    setCurrentPage(page)
  }

  return (
    <div className={styles.pagination}>
      <PaginationPage
        count={ratio} 
        page={currentPage}
        onChange={(event, value) => handleClick(value)} 
        renderItem={(item) => (
          <PaginationItem
            slots={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
            {...item}
          />
        )}
      />
    </div>
  )
}

export default Pagination
