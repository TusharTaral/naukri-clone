import React from 'react'
import FirstDiv from './FirstDiv'

import { SpringCog } from './reactSpring/SpringCog'
import { CenterPagination } from './CenterPagination'

const Home = () => {
  return (
    <div>
      <FirstDiv />
      <SpringCog />
      <CenterPagination />
    </div>
  )
}

export default Home
