




import React from 'react'
import styles from './About.module.css'
import Banner from '../../components/Banner/Banner';
import Title from '../../components/Title/Title'
import Gallery from '../../components/Gallery/Gallery';
import { aboutpagedata } from '../../datas/aboutpage/page';


const About = () => {
  return (
    <div className={styles.aboute_container}>


      <div className={styles.banner} style={{ width: '100%', height: 'full', backgroundColor: 'slategray' }}>
      <Banner image="/assets/images/istockphoto-1141191007-612x612.jpg"/>

      </div>



    <div className="w-full h-auto flex flex-col justify-around  text-white ">

   <Title title="About PulseArt"/>

        <p className={styles.text}>

        Grammy Award winning jazz pianist Brad Mehldau has recorded and performed extensively since the early 1990s. Mehldau’s most consistent output over the years has taken place in the trio format. Starting in 1996, his group released a series of five records on Warner Bros. entitled The Art of the Trio (recently re-packaged and re-released as a 5-Disc box set by Nonesuch in late 2011). During that same period, Mehldau also released a solo piano recording entitled Elegiac Cycle, and a record called Places that included both solo piano and trio songs. Elegiac Cycle and Places might be called “concept” albums made up exclusively of original material with central themes that hover over the compositions. Other Mehldau recordings include Largo, a collaborative effort with the innovative musician and producer Jon Brion, and Anything Goes—a trio outing with bassist Larry Grenadier and drummer Jorge Rossy.

        </p>

    </div>







        <div className={styles.gallery}>

          {aboutpagedata.map((item) => (
      <Gallery key={item.id} item={item}/>
          ))}

        </div>
      
    </div>
  )
}

export default About
