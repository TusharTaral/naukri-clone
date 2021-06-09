import React from 'react'
import { SkeletonAnimation } from './SkeletonAnimation'
import { SkeletonElement } from './SkeletonElement'

export const SkeletonSideBar = () => {
    return (
        <div className='skeleton-wrapper'>
            <div className='skeleton-sidebar'>
                <SkeletonElement type='text' />
                <SkeletonElement type='text' />
                <SkeletonElement type='text' />
                <SkeletonElement type='text' />
            </div>
            <SkeletonAnimation />
        </div>
    )
}
