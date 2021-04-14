import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getJobsByDate, getJobsByLocation, getJobsByRating } from '../redux/actions'


export const SideBar = () => {

    const dispatch = useDispatch();
    const skill = useParams().job
    var location = '';

    const handleLocation = (e) => {
        const { name, checked } = e.target;

        if (checked) {
            location = name
            dispatch(getJobsByLocation(skill, name))
        } else {
            let loc = ''
            dispatch(getJobsByLocation(skill, loc))
            location = ''
        }
    }

    const handleRating = (e) => {
        const { name, checked } = e.target;
        let num = Number(name)
        if (checked) {
            dispatch(getJobsByRating(skill, num, location))
        } else {
            dispatch(getJobsByLocation(skill, location))
        }

    }

    const handleDate = (e) => {
        const { value } = e.target
        dispatch(getJobsByDate(skill, location, value))
    }

    return (
        <div className="sidenav">
            <div>
                <h5 className='filterTitle'>Location</h5>
                <div className='itemDiv'>
                    <input type='checkbox' name='pune' onChange={handleLocation} />
                    <p className='location'>Pune</p>
                    <input type='checkbox' name='mumbai' onChange={handleLocation} />
                    <p className='location'>Mumbai</p>
                    <input type='checkbox' name='bangalore' onChange={handleLocation} />
                    <p className='location'>Bangalore</p>
                </div>
            </div>
            <div>
                <h5>Ratings</h5>
                <input type='checkbox' name='0' onChange={handleRating} />
                <p>0-1 Star</p>
                <input type='checkbox' name='1' onChange={handleRating} />
                <p>1-2 Star</p>
                <input type='checkbox' name='2' onChange={handleRating} />
                <p>2-3 Star</p>
                <input type='checkbox' name='3' onChange={handleRating} />
                <p>3-4 Star</p>
                <input type='checkbox' name='4' onChange={handleRating} />
                <p>4-5 Star</p>
            </div>
            <div>
                <h5>Sort by Date</h5>
                <select onChange={handleDate}>
                    <option value='asc'>Newest</option>
                    <option value='DESC' >Oldest</option>
                </select>
            </div>

        </div>
    )
}
