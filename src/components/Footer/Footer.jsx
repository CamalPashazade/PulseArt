

import React from 'react'
import styles from './footer.module.css';
import { SlSocialFacebook } from "react-icons/sl";
import { FaInstagram } from "react-icons/fa";
import { AiOutlineYoutube } from "react-icons/ai";

import useIsMobile from '../Ismobile/isMobile';
import { Link } from 'react-router-dom';


const Footer = () => {


  const isMobile = useIsMobile();


  

  return (
    <footer className={isMobile ? styles.mobile_footer : styles.footer}>


<div className={ styles.footer_container}>


<div className={styles.social_media}>

  <Link to={'/'}><SlSocialFacebook size={25}/></Link>

  <Link to="https://www.instagram.com/etudbaku/?hl=en" target="_blank" rel="noopener noreferrer">
  <FaInstagram size={25} />
</Link>


  <Link href={'/'}><AiOutlineYoutube size={25}  /></Link>

</div>

     <p className={styles.copyright}>We respect your privacy.</p>
      <p className={styles.copyright}>Copyright 2024 PulseArt. All rights reserved. </p>


</div>

    </footer>
  )
}

export default Footer
