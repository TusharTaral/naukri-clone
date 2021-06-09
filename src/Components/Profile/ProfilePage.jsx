import React, { useContext, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { getJobs } from '../../Redux/JobSearchRedux/actions'
import Footer from '../Footer'
// import { Navbar } from "../Navbar";
import { AuthContext } from '../Register/AuthContextProvider'
import styled from "./Profile.module.css"
import ProfileNav from './ProfileNav'
import SideDiv5 from "../Homepage/SideDiv/SideDiv5"
import SideDiv4 from "../Homepage/SideDiv/SideDiv4"
import {saveData} from "../Ultis/Local"
const ProfilePage = () => {
    const { data, count } = useContext(AuthContext)
    saveData("user",data)
    const [job, setJob] = useState('');
    const dispatch = useDispatch()
    // const [search, setIsSearch] = useState(false);
    // const isSearch = useSelector(state => state.job.isSearch)

    const handleSearch = () => {
        let location=""
        dispatch(getJobs(job,location));
        // setIsSearch(true)
    }
    // if (search) {
    //     return <Redirect to={`/search/${job}`} push />
    // }
    return (
        <div style={{ width: '100vw' }}>
            <ProfileNav />
    
            <div className={styled.back}  style={{ display: "flex" }}>
                <div style={{ flexBasis: "50%" }} >
                    <div className={styled.search1}>
                        <img style={{ width: "20px", height: "20px", marginTop: '17px' }} src="https://image.flaticon.com/icons/png/128/622/622669.png" alt="icon search" />

                        <input className={styled.searchJob} style={{ width: "93%", height: "90%", border: "0px" }} value={job} onChange={(e) => setJob(e.target.value)} placeholder="skill" type="text" />
                        {/* <button onClick={handleSearch} className={styled.btn}>Search</button> */}

                     <Link className={styled.btn}  to={`/search/${job}`}>  <button onClick={handleSearch} className={styled.btn} >Search</button></Link> 
                    </div>
                    <div style={{height:"80%"}}></div>
                    <div style={{display:"flex"}}>
                    <div className={styled.save}>
                        <h3>Application Summary </h3>
                        <p style={{marginTop:"20%"}}>Daily Limit of Application: 50</p>
                    </div>
                    <div  className={styled.save} >
                        <h3>Saved Job </h3>
                        <p style={{marginTop:"20%"}}>you have {count} saved job till now</p>
                    </div>
                    </div>
                </div>
                <div style={{ flexBasis: "50%" }}>
                    <div className={styled.div}>
                    <img className={styled.img} src={data[2].image} alt="" />
                        <h1>{data[0].name}</h1>
                    
                        <h3>{data[1].education}</h3>
                        <p>in</p>
                        <h2>{data[1].specilization}</h2>
                        <h3>Phone number : {data[0].mobile}</h3>
                        <h3>Email Id :{data[0].email}</h3>
                    </div>
          
                    <SideDiv4/>
                    <SideDiv5/>
                </div>


            </div>
            <div style={{height:"130vh"}}></div>
            <Footer />
        </div>
    )
}

export default ProfilePage
