import React from 'react';
import styled from "./SideDiv1.module.css";
// import SideDiv7 from './SideDiv7';
const SideDiv8 = () => {
  return (
    <div style={{textAlign:"left"}} className={styled.div1} >
      <h3>Jobs by Location</h3>
      <p style={{color:"#4a90e2"}}>
      Jobs in Delhi<br/>
Jobs in Mumbai<br/>
Jobs in Chennai<br/>
Jobs in Gurgaon<br/>
Jobs in Noida<br/>
Jobs in Kolkata<br/>
Jobs in Hyderabad<br/>
Jobs in Pune<br/>
Jobs in Bangalore<br/>
Jobs in Ahmedabad
      </p>
    </div>
  )
}

export default SideDiv8