import React from 'react'
import styled from "./SideDiv1.module.css"
const SideDiv4 = () => {
  return (
    <div className={styled.div1}>
      <div>
          <img style={{height:"40px",margin:"5px"}} src="https://static.naukimg.com/s/7/0/assets/images/src/widgets/fast-forward-wdgt/v1/ffLogo.799817e8.png" alt=""/>
      </div>
      <h4>Naukri Resume Score - Free</h4>
      <p>Get your FREE resume feedback report and know the improvement areas in your resume within 30 seconds</p>
      <h4>Reach out to more recruiters</h4>
      <p>Become a Featured Applicant on Naukri and Increase your profile views by up to 3 times.</p>
      <p>Call 1800-572-5557 now! (Toll-Free) for JobSeeker services</p>
      <button className={styled.btn2}>Know More</button>
    </div>
  )
}

export default SideDiv4
