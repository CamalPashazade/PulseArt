import React from 'react'



const Gallery = ({item}) => {
  return (
   

    <div >
              
    <img
    src={item.img}
    width={350}
    height={300}
     alt={item.id.toString()}
     style={{ objectFit: 'cover',margin:'5px',borderRadius:"7px" }}
     
     

    
    />
     </div>


  )
}

export default Gallery
