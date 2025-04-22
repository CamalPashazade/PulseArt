import React, { useEffect, useState } from 'react';
import { navigation } from '../../datas/nav/page';
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";
import styles from './nav.module.css';
import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);


  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'auto';
    return () => (document.body.style.overflow = 'auto');
  }, [isMenuOpen]);

  return (
    <header className={styles.nav}>
      <Link to={'/'} className={styles.logo}> 
        <img
          src="/assets/Pulseart_logo.png" 
          alt="logo"
        />
      </Link> 

      <div onClick={toggleMenu} className={styles.icon}>
        {isMenuOpen ? (
          <IoCloseSharp style={{ color: 'white' }} size={24} />
        ) : (
          <GiHamburgerMenu style={{ color: 'white' }} size={24} />
        )}
      </div>

      <nav className={`${styles.links} ${isMenuOpen ? styles.mobileMenu : ''}`}>
        {navigation.map((item) => (
          <Link
            key={item.id}
            to={item.href}
            className={location.pathname === item.href ? styles.isActive : styles.link}
            onClick={() => setIsMenuOpen(false)} 
          >
            {item.title}
          </Link>
        ))}
      </nav>
    </header>
  );
};

export default Navigation;
