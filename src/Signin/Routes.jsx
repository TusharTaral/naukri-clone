import React from "react";
import Signup from "./Signup";
import { AuthProvider } from "./contexts/AuthContext";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import Dashboard from "./Dashboard"
import Login from "./Login";
import PrivateRoute from "./PrivateRoute";
import ForgotPassword from "./ForgotPassword";
import UpdateProfile from "./UpdateProfile";
import Home from "../Components/Home";
import Personal from "../Components/Register/Personal";
import Education from "../Components/Register/Education";
import Details from "../Components/Register/Details";
import ProfilePage from "../Components/Profile/ProfilePage";
import { SearchResultPage } from "../Components/SearchResultPage";

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

              <PrivateRoute path="/update-profile">
                <UpdateProfile />
              </PrivateRoute>
              <Route path="/signup">
                <Signup />
              </Route>
              <PrivateRoute path="/personal">
                <Personal />
              </PrivateRoute>
              <PrivateRoute path="/education">
                <Education />
              </PrivateRoute>
              <PrivateRoute path="/details">
                <Details />
              </PrivateRoute>
              <PrivateRoute path="/profile">
                <ProfilePage />
              </PrivateRoute>
              <Route path="/login">
                <Login />
              </Route>

              <Route path="/forgot-password">
                <ForgotPassword />
              </Route>

              <Route path="/profile">
                <ProfilePage />
              </Route>
              <Route path="/personal">
                <Personal />
              </Route>
              <Route path="/education">
                <Education />
              </Route>
              <Route path="/details">
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

export default Routes;
