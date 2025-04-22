import React, { useEffect, useState } from 'react'
import styles from './contact.module.css'
import Banner from '../../components/Banner/Banner'
import Title from '../../components/Title/Title'

const Contact = () => {
  const [data, setData] = useState([]); 

  useEffect(() => {
    const apiUrl = import.meta.env.VITE_API_URL;

    console.log("API URL:", apiUrl);
    fetch(`${apiUrl}/User`, { 
      method: 'GET',
      headers: {
          'Content-Type': 'application/json',
      },
      credentials: 'include'  // Include credentials if needed (cookies, etc.)
  })
      .then((res) => res.json())
      .then((res) => setData(res))
      .catch((error) => console.error("Error fetching data:", error)); 
  }, []);

  console.log("Adata", data);

  return (
    <div className={styles.contact_container}>
 {/*      {data.length > 0  ? data.map((item) => (
        <div className='text-white' key={item.userId}>{item.userName}</div>
      )) : "no data"} */}
      <div style={{ width: '100%', height: 'full', backgroundColor: 'slategray' }}>
        <Banner image="/assets/images/istockphoto-1141191007-612x612.jpg"/>
      </div>
      <div className="w-full h-auto flex flex-col justify-around text-white ">
        <Title title="Contact"/>
        <p className="text-4">
          PulseArt most consistent output over the years has taken place in the trio format. Starting in 1996, his group released a series of five records on Warner Bros. entitled The Art of the Trio (recently re-packaged and re-released as a 5-Disc box set by Nonesuch in late 2011). During that same period, Mehldau also released a solo piano recording entitled Elegiac Cycle, and a record called Places that included both solo piano and trio songs. Elegiac Cycle and Places might be called “concept” albums made up exclusively of original material with central themes that hover over the compositions. Other Mehldau recordings include Largo, a collaborative effort with the innovative musician and producer Jon Brion, and Anything Goes—a trio outing with bassist Larry Grenadier and drummer Jorge Rossy.
        </p>
      </div>
    </div>
  )
}

export default Contact
