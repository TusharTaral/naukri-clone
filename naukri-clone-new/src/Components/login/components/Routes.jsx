import React from "react"
import {Route,Switch} from "react-router-dom"
import { Login } from "./login"
import { Todo } from "./Todo"

export const Routes =()=>{
    return(
        <>

       <Switch>
        <Route exact path="/" >          
        <Login/>
        </Route>
        <Route path="/todo">
         <Todo/>
        </Route>
        </Switch>
        </>
    )
}