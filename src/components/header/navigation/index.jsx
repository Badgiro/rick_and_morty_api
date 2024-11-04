import React from 'react'
import { Link } from "react-router-dom";
import styles from './style.module.css'
import { Button } from '@mui/material';

const HeaderNavigation = ({isOpen, setIsOpen, toggleMenu}) => {
  return (
    <div className={styles.burger_menu}>
       <button className={styles.burger_button} onClick={toggleMenu}>
        ☰
      </button>
      <nav className={` ${styles.menu} ${isOpen ? styles.open : ""}`}>
        <ul className={styles.menu_position}>
          <li className={styles.navItem}>
            <Link to="/character">Characters</Link>
          </li>
          <li className={styles.navItem}>
            <Link to="/location">Locations</Link>
          </li>
          <li className={styles.navItem}>
            <Link to="/episode">Episodes</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default HeaderNavigation
