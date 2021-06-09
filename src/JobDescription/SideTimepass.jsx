import React from "react";
import styles from "./SideTimePass.module.css"
// import SideDiv4 from "../Components/Homepage/SideDiv4"
export const SideTimePass =()=>{
return(
    <>
     <div className={styles.container}>
         <h3>Benefits and Perks</h3>
         <p>314 Users reported their benefits</p>
         <div style={{display:"flex",justifyContent:"space-around",marginTop:10}}>
             <div>
             <img src="https://static.ambitionbox.com/img/emailers/Cafeteria.jpg" alt ="img1"/>
             <p>Cafeteria</p>
             </div>
             <div>
             <img src="https://static.ambitionbox.com/img/emailers/HealthCare.jpg" alt ="img1"/>
             <p>Health <br/>Insurance</p>
             </div>
             <div>
             <img src="https://static.ambitionbox.com/img/emailers/WFH.jpg" alt ="img1"/>
             <p>Work from<br/> Home</p>
             </div>
         </div>
         <div style={{display:"flex",justifyContent:"space-around"}}>
             <div>
              <img src="https://static.ambitionbox.com/img/emailers/Gym.jpg" alt ="img1"/>
               <p>Gym</p>
              </div>
              <div>
              <img src="https://static.ambitionbox.com/img/emailers/SoftSkillsTraining.jpg" alt ="img1"/>
              <p>Soft Skill<br/>Training</p>
              </div>
              <div>
             <img src="https://static.ambitionbox.com/img/emailers/JobTraining.jpg" alt ="img1"/>
             <p>Job Training</p>
             </div>
         </div>
     </div>
     <div style={{marginTop:50}} className={styles.container}>
      <div>
          <img style={{height:"40px",margin:"5px"}} src="https://static.naukimg.com/s/7/0/assets/images/src/widgets/fast-forward-wdgt/v1/ffLogo.799817e8.png" alt=""/>
      </div>
      <h4 style={{marginTop:10}}>Naukri Resume Score - Free</h4>
      <p>Get your FREE resume feedback report and know the improvement areas in your resume within 30 seconds</p>
      <h4 style={{marginTop:10}}>Reach out to more recruiters</h4>
      <p>Become a Featured Applicant on Naukri and Increase your profile views by up to 3 times.</p>
      <p>Call 1800-572-5557 now! (Toll-Free) for JobSeeker services</p>
      <button className={styles.button}>Know More</button>
    </div>

         <div style={{marginTop:220 }} className={styles.container}>
         <img style={{width:80}} src="https://static.naukimg.com/s/7/1290/i/nl-logo.03e86c15.png" alt ="icon"/>
         <h4 style={{marginTop:30}}>Suggested Courses for you</h4>
         <p>Get Better Jobs & Higher Salaries. Suggested courses</p>
         <div className={styles.line}></div>
         <h5 style={{marginTop:30}}>Using JavaScript, JQuery, and JSON in Django</h5>
         <p>In this final course, we'll look at the JavaScript language and how it supports the Object-Oriented ...</p>
         <div className={styles.line}></div>
         <h5 style={{marginTop:30}}>Master Laravel with Vue.js Fullstack Development</h5>
         <p>Learn Laravel together with Vue.js in this brand new, full-stack, project based course! Learn how to...</p>
         <h5 style={{marginTop:30}}>The Complete jQuery Course: From Beginner To Advanced</h5>
         <p>This course covers jQuery from start to end. You'll learn the ins and outs of developing professiona...</p>
         <div className={styles.line}></div>
         <p style={{fontSize:12,color:"silver"}}>*May Include paid services</p>
     </div>
    </>
)
}