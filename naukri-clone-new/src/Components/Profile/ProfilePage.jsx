import React, { useContext } from 'react'
import Footer from '../Footer'
import { Navbar } from "../Navbar"
import { AuthContext } from '../Register/AuthContextProvider'
import styled from "./Profile.module.css"
import ProfileNav from './ProfileNav'
const ProfilePage = () => {
  const { data, count } = useContext(AuthContext)
  // console.log(data[0])
  // console.log(data[1])
  // console.log(data[2])
  return (
    <div style={{ width: '100vw' }}>
      <ProfileNav />
      {/* <Navbar /> */}
      <div className={styled.div}>
        <h1>{data[0].name}</h1>
        <img className={styled.img} src={data[2].image} alt="" />
        <h3>{data[1].education}</h3>
        <p>in</p>
        <h2>{data[1].specilization}</h2>
        <h3>Phone number : {data[0].mobile}</h3>
        <h3>Email Id :{data[0].email}</h3>
      </div>
      <div style={{ textAlign: 'center', marginBottom: '20px' }}>
        <h3>Saved Job </h3>
        <p>you have {count} saved job till now</p>
      </div>
      <Footer />
    </div>
  )
}

export default ProfilePage
