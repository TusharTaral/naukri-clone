import React from "react";
import {  getJobBySimilarJob } from "../Redux/JobDescriptionRedux/action";
import { loadData } from "../Redux/JobDescriptionRedux/localStorage";
import { useSelector, useDispatch } from 'react-redux';
import { SideBarItem } from "../UILibrary/SideBarItem";
import styles from "./IntrestedJob.module.css"
import { Link } from "react-router-dom";


export const InterestedJob =()=>{
    const dispatch = useDispatch()
    const isLoading = useSelector(state => state.jobId.isLoading);
    const jobSug5 = useSelector(state => state.jobId.jobSug5);
    console.log(jobSug5)
    React.useEffect(()=>{
        const job = loadData("jobForDes")
       dispatch(getJobBySimilarJob(job))
    },[dispatch])
    return isLoading?<div>...loading</div>:(
        <>
          <div className={styles.container}>
              {
                  jobSug5?.map(item=>{
                     return(<>
                        <h4 style={{marginTop:10}}>{item.companyName}</h4>
                        <div className={styles.container1}>
                            <p> {item.skill}</p>
                            <p>{item.rating}</p>
                            <img style={{marginLeft:-12}} src="https://img.icons8.com/emoji/20/000000/star-emoji.png" alt="star" />
                            <p>{`(${item.reviews} Reviews)`}</p>
                        </div>
                         <p>{item.description}</p>
                         <div style={{marginTop:10}}>
                             <SideBarItem label={item.location}>
                                 <img style={{width:20,height:20}} src="https://image.flaticon.com/icons/png/128/484/484167.png" alt ="Icon"/>
                             </SideBarItem>
                         </div>
                         <div className={styles.side}>
                         <p>Posted: {Number(`${item.date}`)>1?`${item.date} days ago`:`${item.date} day ago`}</p>
                         </div>
                         <div className={styles.line}></div>
                     </>)
                  }
                  )
                    
                
              }
              <Link to="./search" push><div style={{marginTop:8,marginBottom:-5,color:"blue"}} className={styles.side}>View All</div></Link>
             
          </div>
        </>
    )
}