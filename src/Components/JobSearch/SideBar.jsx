import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getJobsByDate, getJobsByExp, getJobsByLocation, getJobsByRating, getJobsBySalary } from "../../Redux/JobSearchRedux/actions"
import { SkeletonSideBar } from '../Skeleton/SkeletonSideBar'
import { Slider } from '@material-ui/core'
import './SideBar.css'

export const SideBar = () => {
    const [show, handleShow] = useState(false);
    const loading = useSelector(state => state.job.isLoading)

    const transitionNavBar = () => {
        if (window.scrollY > 170) {
            handleShow(true);
        } else {
            handleShow(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', transitionNavBar)
        return () => { window.removeEventListener('scroll', transitionNavBar) }
    }, [])


    const dispatch = useDispatch();
    const skill = useParams().job
    const [location, setLocation] = useState('');

    const handleLocation = (e) => {
        const { name, checked } = e.target;
        if (checked) {
            setLocation(name)
            dispatch(getJobsByLocation(skill, name))
        } else {
            let loc = ''
            dispatch(getJobsByLocation(skill, loc))
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

    const [exp, setExp] = useState(0);
    const handleExpChange = (e, value) => {
        dispatch(getJobsByExp(skill, location, value))
        setExp(value)
    }

    const handleSalary = (e) => {
        const { name, checked } = e.target;
        let num = Number(name);
        if (checked) {
            dispatch(getJobsBySalary(skill, num, location))
        } else {
            dispatch(getJobsBySalary(skill, location))
        }
    }

    return (

        <div className={`sidenav ${show && 'useEffect'}`} >

            {   loading &&
                [1, 2, 3].map(el => {
                    return (
                        <SkeletonSideBar key={el} />
                    )
                })
            }

            <div className='filterDiv'>
                <h5 className='filterTitle'>Location</h5>
                <div className='itemDiv'>
                    <div className='forMargin'></div>
                    <div>
                        <input type='checkbox' name='pune' onChange={handleLocation} />
                        <p className='location'>Pune</p>
                    </div>
                    <div>
                        <input type='checkbox' name='mumbai' onChange={handleLocation} />
                        <p className='location'>Mumbai/Bombay</p>
                    </div>
                    <div>
                        <input type='checkbox' name='bangalore' onChange={handleLocation} />
                        <p className='location'>Bangalore/Bengaluru</p>
                    </div>
                    <div>
                        <input type='checkbox' name='delhi' onChange={handleLocation} />
                        <p className='location'>Delhi/NCR</p>
                    </div>
                </div>
            </div>

            <div className='filterDiv'>
                <h5 className='filterTitle'>Experience</h5>
                <div className='itemDiv'>
                    <div style={{ width: '70%', marginTop: '50px', marginLeft: '10px' }}>
                        <Slider
                            defaultValue={exp}
                            aria-labelledby="discrete-slider"
                            valueLabelDisplay="on"
                            step={1}
                            marks
                            min={0}
                            max={12}
                            onChangeCommitted={handleExpChange}
                        />
                    </div>
                </div>
            </div>

            <div className='filterDiv'>
                <h5 className='filterTitle'>Ratings</h5>
                <div className='itemDiv'>
                    <div className='forMargin'></div>
                    <div>
                        <input type='checkbox' name='4' onChange={handleRating} />
                        <p>4-5 Star</p>
                    </div>
                    <div>
                        <input type='checkbox' name='3' onChange={handleRating} />
                        <p>3-4 Star</p>
                    </div>
                    <div>
                        <input type='checkbox' name='2' onChange={handleRating} />
                        <p>2-3 Star</p>
                    </div>
                    <div>
                        <input type='checkbox' name='1' onChange={handleRating} />
                        <p>1-2 Star</p>
                    </div>
                </div>
            </div>

            <div>
                <h5 className='filterTitle'>Salary</h5>
                <div className='itemDiv'>
                    <div className='forMargin'></div>
                    <div>
                        <input type='checkbox' name='0' onChange={handleSalary} />
                        <p>0-3 Lakhs</p>
                    </div>
                    <div>
                        <input type='checkbox' name='3' onChange={handleSalary} />
                        <p>3-6 Lakhs</p>
                    </div>
                    <div>
                        <input type='checkbox' name='6' onChange={handleSalary} />
                        <p>6-10 Lakhs</p>
                    </div>
                    <div>
                        <input type='checkbox' name='10' onChange={handleSalary} />
                        <p>10-15 Lakhs</p>
                    </div>
                </div>
            </div>

            <div>
                <h5 className='filterTitle'>Sort by Date</h5>
                <select onChange={handleDate}>
                    <option value='asc'>Newest</option>
                    <option value='DESC' >Oldest</option>
                </select>
            </div>
        </div>
    )
}
