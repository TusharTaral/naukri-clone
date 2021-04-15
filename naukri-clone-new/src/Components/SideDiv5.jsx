import React from 'react'
import styled from "./SideDiv1.module.css"
const SideDiv5 = () => {
  return (
    <div>
    <div className={styled.div1}>
      <div>
          <img src="https://static.naukimg.com/s/7/0/assets/images/src/widgets/naukri-learning-wdgt/v2/nlLogo.c6a62185.png" alt=""/>
      </div>
      <p>Top courses to grow in your career</p>
      <button className={styled.btn2}>Explore Courses</button>
      <p style={{color:"grey",marginLeft:"10px"}}>50000+</p>
    </div>
    </div>
  )
}

export default SideDiv5
