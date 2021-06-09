import React from 'react'
import { SkeletonAnimation } from './SkeletonAnimation'
import { SkeletonElement } from './SkeletonElement'

export const SkeletonMapDiv = () => {
    return (
        <div className='skeleton-wrapper'>
            <div>
                <SkeletonElement type='text' />
                <SkeletonElement type='title' />
                <SkeletonElement type='text' />
                <SkeletonElement type='title' />
            </div>
            <SkeletonAnimation />
        </div>
    )
}
