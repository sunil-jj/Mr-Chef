import React from 'react'

function Contact() {
  return (
    <div>

      <div className='topbox'>
        <div style={{width:"35%",marginLeft:"37%"}}>
          <h3 style={{color:"orange",fontFamily:"sans-serif",fontWeight:"bold",justifyContent:"center"}} > Subscribe to our social  networks so as <br/> not to miss interesting events and discounts!</h3>
        </div>
       

      </div>
      <h2 style={{marginTop:"5px",marginLeft:"44%",fontFamily:"cursive",fontWeight:"bold",fontSize:"27px"}}>  Contacts </h2>
      <div style={{marginTop:"30px",display:"flex"}}>
        <div style={{marginLeft:"35px"}}>            
        <div> 
        <h2 style={{fontSize:"22px",fontFamily:"cursive"}}> Delivery</h2>
        <div style={{display:"flex"}}>
          <img style={{width:"4%"}} src="https://cdn.iconscout.com/icon/premium/png-256-thumb/farm-truck-1594763-1349388.png  "/>
          <h3> +38 (063) 98-75-615</h3>
        </div>
        </div>

        <div style={{marginTop:"35px"}}> 
        <h2 style={{fontSize:"22px",fontFamily:"cursive"}}> Pick Up</h2>
        <div style={{display:"flex"}}>
          <img style={{width:"4%"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDhyvCCdmAL40VgPrSEnPfgvuJ6qH7sFKETvs_BpA&s "/>
          <h3> Katerynynskaya St,93 Odessa  </h3>
        </div>
        </div>

        <div style={{marginTop:"35px"}}> 
        <h2 style={{fontSize:"22px",fontFamily:"cursive"}}> Working Hours:</h2>
        <div style={{display:"flex"}}>
          <img style={{width:"4%"}} src=" https://media.istockphoto.com/id/1193093429/video/clock-time-concept-clock-time-lapse.jpg?s=640x640&k=20&c=LOC9kBvBsAHSUyvefZ2-QaOWpLUEWJza66u-HRHQ_sw= "/>
          <h3> 8.00-21.00 </h3>
        </div>
        </div>
        </div>

        <div > 
          <img style={{width:"60%",borderRadius:"20px"}} src=" https://chiefsluauhawaii.com/wp-content/uploads/2021/08/hyatt-pickup-location-map.png"/>

        </div>




        
      </div>

      <div style={{border:"2px solid black",width:"100%",height:"150px",backgroundColor:"black",display:"flex"}} className='footer'>
       <div style={{color:"white",marginLeft:"10px"}}>
         <h4> New</h4>
         <h4> Shawarma</h4>

         <h4> Italian</h4>
         <h4> East</h4>

         <h4> Pizza</h4>

         <h4> Drinks</h4>


       </div>

       <div style={{marginLeft:"580px"}}>
        
        <img style={{width:"30%"}} src=" https://elements-cover-images-0.imgix.net/fda54103-93aa-4f82-83cd-e95044b58c85?auto=compress%2Cformat&fit=max&w=2740&s=9c89581eb39a356bc14fd2f4b77645a2"  />
        
       
       </div>



      </div>
    

      
    </div>
  )
}

export default Contact