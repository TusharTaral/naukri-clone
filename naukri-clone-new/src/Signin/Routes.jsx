import React from "react"
import Signup from "./Signup"
import { AuthProvider } from "./contexts/AuthContext"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Dashboard from "./Dashboard"
import Login from "./Login"
import PrivateRoute from "./PrivateRoute"
import ForgotPassword from "./ForgotPassword"
import UpdateProfile from "./UpdateProfile"
import Home from "../Components/Home"

function Routes() {
  return (
    <div
   
      style={{ minHeight: "100vh" }}
    >
      <div className="w-100" style={{ maxWidth: "400px" }}>
        <Router>
          <AuthProvider>
            <Switch>
              <PrivateRoute exact path="/" >
                <Home />
              </PrivateRoute>
              <PrivateRoute path="/update-profile"  >
                <UpdateProfile />
              </PrivateRoute>
              <Route path="/signup" >
                <Signup />
              </Route>
              <Route path="/login"  >
                <Login />
              </Route>
              <Route path="/forgot-password" >
                <ForgotPassword />
              </Route>
            </Switch>
          </AuthProvider>
        </Router>
        {/* <Login/> */}

      </div>
    </div>
  )
}

export default Routes
