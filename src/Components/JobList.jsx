import React from 'react'
import styles from './JobList.modules.css'
import { useSelector } from 'react-redux'

export const JobList = () => {
    const jobs = useSelector(state => state.job.jobs)

    return (
        <div className={styles.container}>
            {
                jobs.map((el) => {
                    return (
                        <div key={el.id}>
                            <div>{el.companyName}</div>
                            <div>{el.skill} at {el.location}</div>
                            <div>{el.salary}</div>
                            <div>{el.experience}</div>
                            <div>Rating={el.rating}</div>
                            <div>{el.date}-Days ago</div>
                            <hr></hr>
                        </div>
                    )
                })
            }
        </div>
    )
}
