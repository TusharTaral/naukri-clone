import React from "react";
import { useSelector,useDispatch } from 'react-redux';
import { useParams } from "react-router";
import { getJobById } from "./action";
import {SideBarItem} from "../UILibrary/SideBarItem"
import {Button} from "../UILibrary/Button";
import styles from "./JobDescription.module.css"

export const JobDescription=()=>{
    const dispatch = useDispatch()
   
    const data = useSelector(state => state.jobId.jobs);
    
    const {id,job} = useParams();
    console.log(job)
    React.useEffect(()=>{
        dispatch(getJobById(id));
    },[])  
    return(
        <>
           <div className={styles.container}>
              <h3>{data.companyName}</h3>
              <div>
              <p> {data.skill}</p>
              <p>{data.rating}</p>
              <img src="https://img.icons8.com/emoji/48/000000/star-emoji.png" alt="star"/>
              <p>{`(${data.reviews} Reviews)`}</p>
              </div>  
            <SideBarItem label={`0-${data.experience} years`}> 
                  <img src="https://img.icons8.com/android/24/000000/suitcase.png"/>
             </SideBarItem> 
             <div>
             <SideBarItem label={`${data.salary} P.A.`}> 
                  <img src="https://img.icons8.com/material-sharp/24/000000/rupee.png"/>
             </SideBarItem>         
             <SideBarItem label={data.location}> 
                  <img src ="https://image.flaticon.com/icons/png/128/484/484167.png"/>
             </SideBarItem>  
             <div>
                 Register to Apply
             </div>
             <Button type="primary" width="150px" input="LOGIN TO APPLY">
             </Button>
             </div>
             <div>
             </div>
             <div>
                 <div>
                 <p>Posted:{}</p>
                 </div>
                 <div>
                 <p>Openings:{}</p>
                 </div>
                 <div>
                 <p>Job Applicants:{}</p>
                 </div>
             </div>
           </div>

           <div>
               <h3>
               Job description
               </h3>
               <h4>
               Roles and Responsibilities
               </h4>
               <ul>
                   <li>Hands on Experience in ADA Compliance - Must</li>
                   <li>writing Copy decks, technical documents, including SOPs, </li>
                   <li>User manuals for developed software, API documentations, Mobile Application Documentations,</li>
                   <li>ITIL Documentations, Release notes, Research papers, White papers, </li>
                   <li>Knowledge Management documentations & Social media, Presentations, Blogs and Web content., </li>
                   <li>Ensure brand creation and consistency across all content and communication, </li>
                   <li>Strong communication skills for interacting with all the levels of Project organization. </li>
                   <li>Ability to work as individual contributor,</li>
                   <li>Ability to write in a variety of styles and formats for multiple audiences and for a variety of media including social, print, video, and online
                   </li>
               </ul>
           </div>
        </>
    )
}