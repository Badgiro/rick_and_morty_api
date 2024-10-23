import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/images/png/logo.png'


const HeaderLogo = () => {
  return (
    <Link to='/character'>
  <img src={logo} alt="logo" />
  </Link>
  )
}

export default HeaderLogo
