

import React from 'react'
import styles from './footer.module.css';
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

import useIsMobile from '../Ismobile/isMobile';
import { Link } from 'react-router-dom';


const Footer = () => {


  const isMobile = useIsMobile();


  

  return (
    <footer className={isMobile ? styles.mobile_footer : styles.footer}>


<div className={ styles.footer_container}>


<div className={styles.social_media}>

  <Link to={'/'}>
  <FaFacebookF className={`${styles.link} ${styles.link_facebook}`} />
  </Link>
  

  <Link to="https://www.instagram.com/etudbaku/?hl=en" target="_blank" rel="noopener noreferrer">
  <FaInstagram className={`${styles.link} ${styles.link_instagram}`} />
</Link>


  <Link href={'/'}>
  <FaYoutube className={`${styles.link} ${styles.link_youtube}`} />
  </Link>

</div>

     <p className={styles.copyright}>We respect your privacy.</p>
      <p className={styles.copyright}>Copyright 2024 PulseArt. All rights reserved. </p>


</div>

    </footer>
  )
}

export default Footer
