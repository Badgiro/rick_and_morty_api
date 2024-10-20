import { useState } from "react";
import HeaderLogo from "./headerLogo";
import HeaderNavigation from "./navigation";
import styles from './style.module.css'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className={styles.header}>
      <HeaderLogo />

      <HeaderNavigation
        isOpen={isOpen}
        toggleMenu={toggleMenu}
        setIsOpen={setIsOpen}
      />
    </header>
  );
};

export default Header;
