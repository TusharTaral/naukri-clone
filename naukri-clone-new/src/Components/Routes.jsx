import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { Navbar } from "./Navbar"
import { SearchResultPage } from './SearchResultPage';
import Home from './Home';
import Login from '../Signin/Login';

export const Routes = () => {
    return (
        <div>
            <Navbar />
            <Switch>
                <Route exact path='/'>
                    <Home />
                </Route>
                <Route path='/search/:job'>
                    <SearchResultPage />
                </Route>
                <Route exact path='/login'>
                    <Login />
                </Route>
            </Switch>
        </div>
    )
}

