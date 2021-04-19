import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from 'react-redux'
import { Redirect } from "react-router";
import { getJobs } from "../redux/actions";
import styles from "./SearchBar.module.css"

export const SearchBar = () => {
    const [job, setJob] = useState('');
    const [search, setIsSearch] = useState(false);

    const [location, setLocation] = useState('');
    const dispatch = useDispatch()

    const isSearch = useSelector(state => state.job.isSearch)

    const handleSearch = () => {
        dispatch(getJobs(job, location));
        setIsSearch(true)
    }

    if (search) {
        return <Redirect to={`/search/${job}`} push />
    }

    return (
        <div className={styles.parent}>
            <input placeholder='skill' value={job} onChange={(e) => setJob(e.target.value)} />
            <input placeholder='location' value={location} onChange={(e) => setLocation(e.target.value)} />
            <button onClick={handleSearch} >Search</button>

        </div>
    )
}
