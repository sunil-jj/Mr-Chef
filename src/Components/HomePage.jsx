
import React from 'react'

const backgroundStyle = {
  backgroundImage: 'url(https://media.istockphoto.com/id/1199569763/photo/pizza-in-paper-box-on-wooden-background-copyspace-for-text-and-logo-top-view.jpg?s=612x612&w=0&k=20&c=Z1DCD8TbMnPxLF7gxVuYQbs2bvuS47V1AEf-JHzc2k8=)',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  width: '100%',
  height: '600px',
  marginTop:"32px",
  
};




function HomePage() {
  return (
    <div style={backgroundStyle}>
      <div style={{marginTop:"100px"}} >
      <h2 style={{color:"white",marginRight:"50%"}}> Hello how are you </h2>
      </div>

      
   
    </div>
  )
}

export default HomePage