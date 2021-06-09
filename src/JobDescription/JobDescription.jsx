import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from "react-router";
import { getJobById } from "../Redux/JobDescriptionRedux/action";
import { SideBarItem } from "../UILibrary/SideBarItem"
import { Button } from "../UILibrary/Button";
import styles from "./JobDescription.module.css"
import ProfileNav from "../Components/Profile/ProfileNav";
import { Link } from "react-router-dom";
import { SimilarJob } from "./SimilarJob";
import { InterestedJob } from "./IntrestedJob";
import Footer from "../Components/Footer";
import {SkeletonMapDiv } from "../Components/Skeleton/SkeletonMapDiv";

export const JobDescription = () => {
    const dispatch = useDispatch()

    const data = useSelector(state => state.jobId.jobs);
    const isLoading1 = useSelector(state => state.jobId.isLoading1);
    
    const { id, job } = useParams();
   
    React.useEffect(() => {
        dispatch(getJobById(id,job));
    },[dispatch,id,job]) 
   
    return isLoading1? (
        <div className={styles.container}>
            <div className={styles.box}>
                {
                    [1, 2, 3, 4, 5].map(el => <SkeletonMapDiv key={el} />)
                }
            </div>
        </div>
    ):(
        <>
            <ProfileNav/>
            <div className={styles.background}>
              <p style={{color:"grey",position:"relative",marginLeft:80,padding:20}}><Link to ="/" push>Home</Link>{`>${data.location}`}</p>
            </div>
          
            <div style={{display:"flex"}}>
            <div className={styles.box1}>
            <div className={styles.container}>
                <h3>{data.companyName}</h3>
                <div className={styles.container1}>
                    <p> {data.skill}</p>
                    <p>{data.rating}</p>
                    <img style={{marginLeft:-12}} src="https://img.icons8.com/emoji/20/000000/star-emoji.png" alt="star" />
                    <p>{`(${data.reviews} Reviews)`}</p>
                </div>
                <div style={{marginTop:10}}> 
                <SideBarItem label={`0-${data.experience} years`}>
                    <img src="https://img.icons8.com/android/20/000000/suitcase.png" alt="exp" />
                </SideBarItem>
                </div>
                <div className={styles.container3}>
                    <SideBarItem label={`${data.salary} P.A.`}>
                        <img  src="https://img.icons8.com/material-sharp/20/000000/rupee.png" alt="salary" />
                    </SideBarItem>
                    <SideBarItem label={data.location}>
                        <img  src="https://image.flaticon.com/icons/png/128/484/484167.png" alt ="location" />
                    </SideBarItem>
                    <div className={styles.button}>
                        Register to Apply
                    </div>
                    <Button type="primary" width="150px" input="LOGIN TO APPLY">
                    </Button>
                </div>
                <div className={styles.line}>
                </div>
                <div className={styles.container4}>
                    <div>
                        <p>Posted: {Number(`${data.date}`)>1?`${data.date} days ago`:`${data.date} day ago`}</p>
                    </div>
                    <div>
                        <p>Openings:{ }</p>
                    </div>
                    <div>
                        <p>Job Applicants:{ }</p>
                    </div>
                </div>
            </div>
            
            <div style={{marginTop:26}} className={styles.container5}  >
                <h3>
                    Job description
               </h3>
                <h4 style={{marginTop:8}}>
                    Roles and Responsibilities
               </h4>
                <ul style={{marginLeft:30 ,fontSize:14,marginTop:27,lineHeight:1.5}}>
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
                <div className={styles.roles}>
                    <SideBarItem label="IT/Technical Content Developer">
                        <div style={{marginRight:80}}>Role:</div>
                    </SideBarItem>
                    <SideBarItem label="IT-Software, Software Services">
                    <div style={{marginRight:15}}>Industry Type:</div>  
                    </SideBarItem>
                    <SideBarItem label="IT Software - Application Programming, Maintenance">
                    Functional Area:
                    </SideBarItem>
                    <SideBarItem label="Full Time, Permanent">
                    Employment Type:
                    </SideBarItem>
                    <SideBarItem label="Other">
                    Role Category:
                    </SideBarItem>
                </div>
                <h4 style={{marginTop:20}}>Key Skills</h4>
                <div className={styles.skills}>
                {
                    data.techStack?.map(item=>{
                        return(
                            <>
                            <div className={styles.content}>{item}</div>
                            </>
                        )
                    })
                }
                </div>
                <div className={styles.line}></div>
            </div>
            <div style={{marginTop:26}} className={styles.container5}>
               <h4 >About Company</h4>
               <p style={{marginTop:10,fontSize:14,lineHeight:1.3}}>Virtusa Corporation (NASDAQ: VRTU) is a global information technology (IT) services company providing IT consulting, technology and outsourcing services. Using our enhanced global delivery model, innovative platforming approach and industry expertise, we provide cost-effective services that enable our clients to use IT to enhance business performance, accelerate time-to-market, increase productivity and improve customer service. We serve Global 2000 enterprises and the leading software vendors in communications & technology; banking, financial services & insurance; and media & information industries. We build and sustain application platforms for our clients that create competitive advantage.</p>
               <p style={{marginTop:36,fontSize:14,lineHeight:1.4}}>Founded in 1996 and headquartered in Massachusetts, we have offices and technology centers throughout the U.S., U.K. and Asia. Globally, Virtusa has been acknowledged and recognized by customers, industry associations and media among others. Some of the awards and recognitions include Dataquest-CMR €“ IT Best Employers Survey -2012 (Ranked No. 5), International Business Award €“ 2012(Stevie awards) , Britain€™s Top Employers- 2012, American Business Award€“ 2012,Boston Business Journal€™s Fastest Growing Public Companies, Global Services 100, Fintech 100, Sri Lanka National HRM and others.</p>
               <h5 style={{marginTop:26,fontSize:14,marginBottom:10}}>Company Info</h5>
               <SideBarItem label="Sy.No.115/Part,Plot No.10,Nanakram, guda Village,Serilingampally Mandal, , Hyderabad, Telangana, India">
                   <div>Address:</div>
               </SideBarItem>
            </div>
            <h4 style={{marginLeft:100,marginTop:25}}>Beware of imposters!</h4>
            <p style={{marginLeft:100,marginTop:10}}>Naukri.com does not promise a job or an interview in exchange of money. Fraudsters may ask you to pay in the<br/> pretext of registration fee, Refundable Fee…<span style={{color:"blue"}}>Read More</span></p>
            <h3 style={{marginTop:70,marginLeft:120}}>Similar Jobs</h3>
            <InterestedJob/>
            </div>
            <SimilarJob style={{}}/>
            </div>
            <Footer/>
        </>
    )
}