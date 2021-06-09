
import React from 'react'
import styled from "./MapDiv.module.css"
import { useSelector } from 'react-redux'
// import { Link } from "react-router-dom"
import { SkeletonMapDiv } from '../Skeleton/SkeletonMapDiv'
// import { AuthContext } from '../Register/AuthContextProvider'
import { SingleMapDiv } from './SingleMapDiv'


const MapDiv = () => {

    const data = useSelector(state => state.job.jobs)
    const loading = useSelector(state => state.job.isLoading)


    if (data.length === 0 && !loading) {
        return (
            <div className={styled.container}>
                <div className={styled.box}>
                    <h4 style={{ color: '#091e42', textAlign: 'center', fontSize: '22px' }}>No Such Jobs</h4>
                </div>
            </div>
        )
    }

    return !loading ? (
        <div className={styled.container}>
            {
                data && data.map(el => <SingleMapDiv key={el.id} {...el} />)
            }
        </div>

    ) :
        (
            <div className={styled.container}>
                <div className={styled.box}>
                    {
                        [1, 2, 3, 4, 5].map(el => <SkeletonMapDiv key={el} />)
                    }
                </div>
            </div>
        )
}

export default MapDiv
