import React from "react";
import { getJobByJob } from "../Redux/JobDescriptionRedux/action";
import { loadData } from "../Redux/JobDescriptionRedux/localStorage";
import { useSelector, useDispatch } from 'react-redux';
import { SideBarItem } from "../UILibrary/SideBarItem";
import styles from "./SimilarJob.module.css"
import { SideTimePass } from "./SideTimepass";
import { Link } from "react-router-dom";


export const SimilarJob =()=>{
    const dispatch = useDispatch()
    const isLoading = useSelector(state => state.jobId.isLoading2);
    const jobSug = useSelector(state => state.jobId.jobSug);
    console.log(jobSug)
    React.useEffect(()=>{
        const job = loadData("jobForDes")
       dispatch(getJobByJob(job))
    },[dispatch])
    return isLoading?<div style={{fontSize:40,marginLeft:600}}>...loading</div>:(
        <>
        <div>
          <div className={styles.container}>
              <h3>Jobs you might be interested in</h3>
              {
                  jobSug?.map(item=>{
                     return(<>
                        <h4 style={{marginTop:10}}>{item.companyName}</h4>
                        <p>{item.skill}</p>
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
          <div style={{marginTop:50}}>
          <SideTimePass/>
          
          </div>
          </div>
        </>
    )
}