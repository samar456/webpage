import React from 'react'

const Footer = () => {
  return (
    <>
    <div>
    <div className='fobox'>
        <div className='footer'>
            
            <div className="cl cl1">
            <div className="img"><img
              className="logo"
              src={require("./Images/logopng.png")}
              width={"50px"}
              alt="logo"
              style={{marginLeft:'0px',marginBottom:'10px'}}
              /></div>
            
              <i class="fa-brands fa-discord  foi" style={{color: "#161717"}}></i>
              <i class="fa-brands fa-facebook-f foi" style={{color: "#26282c"}}></i>
              <i class="fa-brands fa-instagram foi" style={{color: "#18191b"}}></i>
              <i class="fa-brands fa-twitter foi " style={{color: "#1e1e20"}}></i>
              <i class="fa-brands fa-linkedin foi"  style={{color: "#161718"}}></i>
           
            </div>
            <div className="cl cl2" >
<ul>
    <li><strong>
RESOURCES</strong></li>
    <li><a href=" ">Leaderboard</a></li>
    <li><a href=" ">About Us</a></li>
    <li><a href=" ">Contact Us</a></li>
    <li><a href=" ">Blogs</a></li>
</ul></div>
            <div className="cl cl2"><ul>
    <li><strong>
    LEGALS</strong></li>
    <li><a href=" ">Terms & Conditions</a></li>
    
    <li><a href=" ">Privacy Policy</a></li>
    <li><a href=" ">Refund Policy</a></li>
</ul></div>
            <div className="cl cl2"><ul>
    <li><strong>
    FOR BUSINESSES</strong></li>
    <li><a href=" ">Business Solutions</a></li>
    
</ul></div>
<hr style={{color:'black'}} />
        </div>
        
        </div>
        </div>
    </>
  )
}

export default Footer
