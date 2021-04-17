import React from 'react'
import { Link, Route, Switch } from 'react-router-dom'
import Home from '../Home'
import ProfilePage from '../Profile/ProfilePage'
import { SearchResultPage } from '../SearchResultPage'
import Details from './Details'
import Education from './Education'
import Personal from './Personal'

const RoutesRegister = () => {
  return (
    <div>

   
      <Link to="/education">

      </Link>
      <Link to="/details"> </Link>
      <Link to="/profile">

      </Link>

      <Switch>
         {/* <Route path="/">
           <Home/>
         </Route> */}
        <Route path="/personal">
          <Personal/>
        </Route>
        <Route path="/education">
          <Education/>
        </Route>
        <Route exact path="/details">
          <Details/>
        </Route>
        <Route path="/profile">
          <ProfilePage/>
        </Route>
        {/* <Route exact path='/search/:job'>
          <SearchResultPage />
        </Route> */}
      </Switch>
    </div>
  )
}

export default RoutesRegister

