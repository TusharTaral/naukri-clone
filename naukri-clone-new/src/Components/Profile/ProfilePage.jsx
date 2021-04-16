import React, { useContext } from 'react'
import {Navbar} from "../Navbar"
import { AuthContext } from '../Register/AuthContextProvider'
import styled from "./Profile.module.css"
import ProfileNav from './ProfileNav'
const ProfilePage = () => {
    const {data,count} =useContext(AuthContext)
    console.log(data[0])
    console.log(data[1])
    console.log(data[2])
  return (
    <div>
        <ProfileNav/>
    <div className={styled.div}>
       <h1>{data[0].name}</h1>
       <img className={styled.img} src={data[2].image} alt=""/>
       <h3>{data[1].education}</h3>
       <p>in</p>
       <h2>{data[1].specilization}</h2>
       <h3>Phone number : {data[0].mobile}</h3>
       <h3>Email Id :{data[0].email}</h3>
    </div>
    <div>
        <h3>Saved Job </h3>
        <p>you have {count} saved job till now</p>
    </div>
    </div>
  )
}

export default ProfilePage
