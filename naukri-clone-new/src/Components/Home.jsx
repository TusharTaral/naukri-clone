import React from 'react'
import FirstDiv from './FirstDiv'
import styled from "./Home.module.css"
import { SpringCog } from './reactSpring/SpringCog'
import { Navbar } from "./Navbar"


import SideDiv1 from "./SideDiv1"
import SideDiv2 from "./SideDiv2"
import SideDiv3 from "./SideDive3"
import SideDiv4 from './SideDiv4'
import SideDiv5 from './SideDiv5'
import Footer from './Footer'
import SideDiv6 from './SideDiv6'
import SideDiv7 from './SideDiv7'
import SideDiv8 from './SideDiv8'
import SideDiv9 from './SideDiv9'

const Home = () => {
  return (
    <div>
      <Navbar />
      <FirstDiv className={styled.display1}></FirstDiv>

      <div style={{ display: "flex" }}>
        <div>
          <SpringCog />
        </div>
        <div>
          <SideDiv1 />
          <SideDiv2 />
          <SideDiv3 />
          <SideDiv4 />
          <SideDiv5 />
          <SideDiv6 />
          <SideDiv7 />
          <SideDiv8 />
          <SideDiv9 />
        </div>

      </div>
      <Footer />

    </div>
  )
}

export default Home
