import React from 'react'
import styled from "./SideDiv1.module.css"
const SideDiv1 = () => {
  return (
    <div style={{marginTop:"35px"}} className={styled.div1} >
      <div className={styled.flex}>
          <div>
              <h4>Search Jobs on the Go !!</h4>
              <p>Download the Naukri app for free & browse from a variety of jobs based on your preferences</p>
          </div>
          <div>
          <img  src="https://static.naukimg.com/s/7/0/assets/images/src/widgets/download-app-link-wdgt/v1/assets/appInstallImg.9d15407f.png" alt=""/>
          </div>
      </div>
      <div>
          <div className={styled.input}>
          +91<input type="text"/><br/>
          </div>
          <button  className={styled.btn}>Send me download Link</button>
          <p>Available on both iOS & Android devices</p>
          <div style={{display:"flex"}}>
              <div>
                <img style={{width:"100px",height:"80px"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlc3g4Dg8byRsoAO2ZSsZl_GEkBkGaHupuZ8mmRBj3SlYJ9xwtSJbAq1Qt0Kuc0le4wbA&usqp=CAU" alt=""/>
              </div>
              <div>
              <img style={{width:"100px",height:"30px"}} src="https://www.beckettcorp.com/wp-content/uploads/Download-Apple-App-Store-Icon.png" alt=""/>
              </div>
          </div>
      </div>
    </div>
  )
}

export default SideDiv1
