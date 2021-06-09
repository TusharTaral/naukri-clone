import React from "react"
import Signup from "../Signin/Signup"
import { AuthProvider } from "../Signin/contexts/AuthContext"
import { BrowserRouter as Router, Switch, Route,Link } from "react-router-dom"
// import Dashboard from "./Dashboard"
import Login from "../Signin/Login"
import PrivateRoute from "../Signin/PrivateRoute"
import ForgotPassword from "../Signin/ForgotPassword"
import UpdateProfile from "../Signin/UpdateProfile"
import Home from "../Components/Homepage/Home"
import Personal from "../Components/Register/Personal"
import Education from "../Components/Register/Education"
import Details from "../Components/Register/Details"
import ProfilePage from "../Components/Profile/ProfilePage"
import { SearchResultPage } from "../Components/JobSearch/SearchResultPage"
import { Recruiter } from "../Components/Recruiter/Recruiter"
import { JobDescription } from "../JobDescription/JobDescription"

function Routes() {
  return (
    <div>
      <div>
        <Link to="/personal"></Link>
        <Link to="/education"></Link>
        <Link to="/details"> </Link>
        <Link to="/profile"></Link>
        <Router>
          <AuthProvider>
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/recruiter">
                <Recruiter />
              </Route>
              <PrivateRoute exact path="/update-profile">
                <UpdateProfile />
              </PrivateRoute>
              <Route exact path="/signup">
                <Signup />
              </Route>
              <PrivateRoute exact path="/personal">
                <Personal />
              </PrivateRoute>
              <PrivateRoute exact path="/education">
                <Education />
              </PrivateRoute>
              <PrivateRoute exact path="/details">
                <Details />
              </PrivateRoute>
              <PrivateRoute exact path="/profile">
                <ProfilePage />
              </PrivateRoute>
              <Route exact path="/login">
                <Login />
              </Route>

              <Route exact path="/forgot-password">
                <ForgotPassword />
              </Route>
              <Route exact path="/search/:job/:id">
                <JobDescription/>
              </Route>
              <Route exact path="/profile">
                <ProfilePage />
              </Route>
              <Route exact path="/personal">
                <Personal />
              </Route>
              <Route exact path="/education">
                <Education />
              </Route>
              <Route exact path="/details">
                <Details />
              </Route>
              <Route exact path="/search/:job">
                <SearchResultPage />
              </Route>
            </Switch>
          </AuthProvider>
        </Router>
        {/* <Login/> */}
      </div>
    </div>
  );
}

export default Routes
