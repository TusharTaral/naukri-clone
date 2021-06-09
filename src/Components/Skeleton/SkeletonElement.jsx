import React from 'react'
// import styled from './skeleton.css'

export const SkeletonElement = ({ type }) => {
    const classes = `skeleton ${type}`

    return (
        <div className={classes}></div>
    )
}
