


import React from 'react'

const Banner = ({image}) => {
  return (
<div className='w-full h-full'>
  <img
  
  src={image}
  alt='Banner Image'
  style={{ width: '100%',objectFit: 'cover',height:"500px"}}
  />
</div>
  )
}

export default Banner

