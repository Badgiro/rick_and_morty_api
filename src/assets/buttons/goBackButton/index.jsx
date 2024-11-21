import React from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import { useNavigate } from 'react-router-dom'
import styles from './style.module.css'

const GoBackButton = () => {
  const navigate = useNavigate()
  return (
    <button className={styles.backButton} onClick={() => navigate(-1)}>
      <ArrowBackIcon /> <div>GO BACK</div>
    </button>
  )
}

export default GoBackButton
