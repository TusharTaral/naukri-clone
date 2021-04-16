import React from 'react'
import { Link, Route, Switch } from 'react-router-dom'
import Details from './Details'

const RoutesRegister = () => {
  return (
    <div>
      <Link to="/details">
        Details
      </Link>
      <Link to="/personal">
        Personal
      </Link>
      <Link to="/education">
        Education
      </Link>
      <Link to="/profile">
        Profile
      </Link>
      <Switch>
        <Route path="/details">
          <Details/>
        </Route>

      </Switch>
    </div>
  )
}

export default RoutesRegister

