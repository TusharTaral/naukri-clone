import React from 'react'
import { JobList } from './JobList'
import { SideBar } from './SideBar'

export const SearchResultPage = () => {
    return (
        <div>
            <SideBar />
            <JobList />
        </div>
    )
}
