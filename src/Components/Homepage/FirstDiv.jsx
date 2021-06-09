import React, { useState } from "react"
import { useDispatch } from 'react-redux'
import { Redirect } from "react-router";
import { getJobs } from "../../Redux/JobSearchRedux/actions";
import styled from "./FirstDiv.module.css"


<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>


const FirstDiv = () => {

  const [job, setJob] = useState('');
  const [search, setIsSearch] = useState(false);

  const [location, setLocation] = useState('');
  const dispatch = useDispatch()

  // const isSearch = useSelector(state => state.job.isSearch)

  const handleSearch = () => {
    dispatch(getJobs(job, location));
    setIsSearch(true)
  }

  if (search) {
    return <Redirect to={`/search/${job}`} push />
  }
  return (
    <div className={styled.FirstDiv}>
      <div className={styled.FirstDiv1}>
        <p className={styled.header}>Find A Job at India's No.1 Job Site</p>
        <div style={{ display: "flex", marginTop: '30px' }}>
          <div className={styled.search1}>
            <img style={{ width: "20px", height: "20px", marginTop: '10px' }} src="https://image.flaticon.com/icons/png/128/622/622669.png" alt="icon search" />

            <input className={styled.searchJob} style={{ width: "93%", height: "90%", border: "0px" }} value={job} onChange={(e) => setJob(e.target.value)} placeholder="Skills" type="text" />

          </div>
          <div className={styled.search2} >
            <img style={{ width: "20px", height: "20px", marginTop: "10px" }} src="https://image.flaticon.com/icons/png/128/684/684809.png" alt="icon location" />
            <input className={styled.searchJob} style={{ width: "50%", height: "90%", border: "0px" }} placeholder='Enter locations..' value={location} onChange={(e) => setLocation(e.target.value)} type="text" />
          </div>
          <button onClick={handleSearch} className={styled.btn}>Search</button>
        </div>

      </div>
      <div className={styled.jobBox}>
        <div className={styled.FirstDiv2}>
          <h2 style={{ textAlign: "center", marginTop: "-10px" }}>Get Personalised Jobs !!</h2>
          <p style={{ textAlign: "center", marginTop: "5px", marginLeft: "5px" }}>Tell us what kind of a job you are looking out for and stay updated with latest opportunities.</p>
          <div style={{ justifyContent: "center" }} className={styled.flex}>
            <button className={styled.btn1}>Register</button>
            <button className={styled.btn2}>Upload CV</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FirstDiv
