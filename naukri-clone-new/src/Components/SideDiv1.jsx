import React from 'react'
import styled from "./SideDiv1.module.css"
const SideDiv1 = () => {
  return (
    <div className={styled.div1} >
      <div className={styled.flex}>
          <div>
              <h4>Search Jobs on the Go !!</h4>
              <p>Download the Naukri app for free & browse from a variety of jobs based on your preferences</p>
          </div>
          <div style={{marginTop:"3.5%"}}>
          <img src="https://static.naukimg.com/s/7/0/assets/images/src/widgets/download-app-link-wdgt/v1/assets/appInstallImg.9d15407f.png" alt=""/>
          </div>
      </div>
      <div>
          <div className={styled.input}>
          +91<input type="text"/><br/>
          </div>
          <button  className={styled.btn}>Send me download Link</button>
          <p>Available on both iOS & Android devices</p>
          <div>
              <div></div>
              <div></div>
          </div>
      </div>
    </div>
  )
}

export default SideDiv1
