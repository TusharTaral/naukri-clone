import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { Navbar } from "./Navbar"
import { SearchResultPage } from './SearchResultPage';
import Home from './Home';

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
            </Switch>
        </div>
    )
}

