import React from 'react'
import { JobList } from './JobList'
import MapDiv from './MapDiv'
import { SideBar } from './SideBar'


export const SearchResultPage = () => {
    return (
        <div>
            <SideBar />
            <MapDiv />
            {/* <JobList /> */}
        </div>
    )
}
