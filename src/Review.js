import React from 'react'

const Review = () => {
  return (
   <>
   <div>
    <div className='review'>
    <div className='rwleft'> <h5>Reviews</h5>
    <div className='rwbox'>
    <div style={{marginLeft:'20px',marginTop:'30px'}}>
    <i class="fa-regular fa-circle-user fa-2xl" style={{color: "#202122", marginRight:'8px',marginTop:'25px'}}></i>
    <strong style={{marginLeft:'10px'}} >Vishal Naik</strong><span style={{display:'block',marginLeft:'40px'}}>⭐⭐⭐⭐⭐</span>
    <p>Awsome bootcamp like very much</p>
    </div>
    </div>
    <button className='rwbtnprev'>Prev</button>
    </div>
    <div className='rwright'> <h6>5.0 ⭐⭐⭐⭐⭐  (1 Rating)</h6>
    <button className='rwbtn'>Next</button></div>
       
       
    </div>
    </div>
   </>
  )
}

export default Review
