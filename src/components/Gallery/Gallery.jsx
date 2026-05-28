import React from 'react'



const Gallery = ({item}) => {
  return (
   

    <div >
              
    <img
    src={item.img}
    width={350}
    height={300}
     alt={item.id.toString()}
     style={{ objectFit: 'cover',margin:'5px',borderRadius:"7px",cursor:'pointer',transition: '0.3s ease',
        }}
        onMouseEnter={(e) => {
          e.target.style.transform = 'scale(1.05)'
        }}
        onMouseLeave={(e) => {
          e.target.style.transform = 'scale(1)'
        }}
     
     

    
    />
     </div>


  )
}

export default Gallery
