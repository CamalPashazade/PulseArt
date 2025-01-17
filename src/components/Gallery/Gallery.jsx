import React from 'react'



const Gallery = ({item}) => {
  return (
   

    <div  className='w-[294px] h-[294px]'>
              
    <img
    src={item.img}
    width={289}
    height={300}
     alt={item.id.toString()}
     style={{ objectFit: 'cover',margin:'5px' }}
     
     

    
    />
     </div>


  )
}

export default Gallery
