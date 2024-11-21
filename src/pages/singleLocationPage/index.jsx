import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { fetchData } from '../../utils'
import { fetchSingleLocation } from '../../store/slices/singleLocationSlice'
import { useDispatch, useSelector } from 'react-redux'

import LocationResidents from '../../components/locationResidents'
import GoBackButton from '../../assets/buttons/goBackButton'
import styles from './style.module.css'

const SingleLocationPage = () => {
  const { id } = useParams()
  const dispatch = useDispatch()

  const { name, type, dimension, residents } = useSelector(
    (state) => state.singleLocation
  )
  console.log(residents && residents)

  useEffect(() => {
    dispatch(fetchSingleLocation(id))
  }, [dispatch, id])

  return (
    <div>
      <div className={styles.locationDesc} >
        {' '}
        <GoBackButton /> <h1>{name}</h1>
      </div>

      <LocationResidents residents={residents} />
    </div>
  )
}

export default SingleLocationPage
