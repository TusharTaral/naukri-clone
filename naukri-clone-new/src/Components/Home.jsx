import React from 'react'
import FirstDiv from './FirstDiv'
import {Navbar} from "./Navbar"
import styled from "./Home.module.css"
import { SpringCog } from './reactSpring/SpringCog'
const Home = () => {
  return (
    <div >
      <Navbar className={styled.display}/>
      <FirstDiv className={styled.display1}></FirstDiv>
      <SpringCog/>

    </div>
  )
}

export default Home
