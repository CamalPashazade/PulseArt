

import React, { useState, useEffect } from 'react';
import { navigation } from '../../datas/nav/page';
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";
import styles from './nav.module.css';
import { Link, useLocation } from 'react-router-dom';
import useIsMobile from '../Ismobile/isMobile';

const Navigation = () => {
 
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useIsMobile();
  const location = useLocation();
  console.log(location.pathname);
  

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className={isMobile ? styles.nav_mobile :styles.nav}>
       <Link to={'/'} className={styles.logo}> 
      <img
        src="/assets/Pulseart_logo.png" 
        alt="logo"
        width={30} 
        height={30} 
      />
       </Link> 

      {isMobile ? (
        <>
          <div onClick={toggleMenu} className={styles.icon}>
            {isMenuOpen ? (
              <IoCloseSharp style={{ color: 'white' }} size={20} />
            ) : (
              <GiHamburgerMenu style={{ color: 'white' }} size={20} />
            )}
          </div>
          {isMenuOpen && (
            <nav className={styles.mobileMenu}>
              {navigation.map((item) => (
                <Link
                  key={item.id}
                  to={`${item.href}`}
                  className={location.pathname === item.href ? styles.isActive : styles.link}
                  onClick={() => setIsMenuOpen(false)} 
                >
                  {item.title}
                </Link>
              ))}
            </nav>
          )}
        </>
      ) : (
        <nav className={styles.links}>
          {navigation.map((item) => (
            <Link
              key={item.id}
              to={`${item.href}`}
              className={location.pathname === item.href ? styles.isActive : styles.link}

            >
              {item.title}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Navigation;