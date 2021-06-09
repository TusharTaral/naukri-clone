import React from 'react'
import styled from "./SideDiv1.module.css"
const SideDive3 = () => {
  return (
    <div className={styled.div1}>
       <div className={styled.flex}>
          <div>
              <h4>Naukri JobSpeak</h4>
              <p>A monthly Job Index that provides insight into hiring trends in your city, job function and industry.</p>
          </div>
          <div style={{marginTop:"3.5%"}}>
          <img src="https://static.naukimg.com/s/7/0/assets/images/src/widgets/naukri-job-speak-wdgt/v1/njs-bg.74cb2db9.png" alt=""/>
          </div>
      </div>
    </div>
  )
}

export default SideDive3
