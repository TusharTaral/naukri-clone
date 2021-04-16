import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { Navbar } from "./Navbar"
import { SearchResultPage } from './SearchResultPage';
import Home from './Home';

import { JobDescription } from '../JobDescription/JobDescription';

import Login from '../Signin/Login';


export const Routes = () => {
    return (
        <div>
            <Navbar />
            <Switch>
                <Route exact path='/'>
                    <Home />
                </Route>
                <Route exact path='/search/:job'>
                    <SearchResultPage />
                </Route>
                <Route path='/search/:job/:id'>
                     <JobDescription/>
                       </Route>
                <Route exact path='/login'>
                    <Login />
                </Route>
            </Switch>
        </div>
    )
}

