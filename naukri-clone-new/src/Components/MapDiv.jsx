import React, { useEffect, useState } from 'react'
import styled from "./MapDiv.module.css"
import { useSelector } from 'react-redux'
import { SkeletonMapDiv } from '../Skeleton/SkeletonMapDiv'

const MapDiv = () => {
    const [count, setCount] = useState(0)
    const handleCount = () => {
        setCount(count + 1)
    }
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
                data && data.map(el => (
                    <div className={styled.box} key={el.id}>
                        <h2 className={styled.companyName}>{el.companyName}</h2>
                        <div className={styled.ratingDiv}>
                            <h5 className={styled.skill} >{el.skill}</h5>
                            <div className={styled.ratingDivTwo}>
                                <div><h5 className={styled.skill, styled.rating}>{el.rating}</h5></div>
                                <div> <img className={styled.img} src="https://img.icons8.com/emoji/48/000000/star-emoji.png" /></div>
                            </div>
                        </div>

                        <div className={styled.flex}>
                            <div className={styled.flex}>
                                <div>
                                    <img className={styled.img} src="https://img.icons8.com/android/24/000000/suitcase.png" alt="1" />
                                </div>
                                <div className={styled.subs}>{el.experience} Yrs</div>
                            </div>
                            <div className={styled.flex}>
                                <div>
                                    <img className={styled.img} src="https://img.icons8.com/material-sharp/24/000000/rupee.png" alt="2" />
                                </div>
                                <div className={styled.subs}>{el.salary}</div>
                            </div>
                            <div className={styled.flex}>
                                <div>
                                    <img className={styled.img} src="https://image.flaticon.com/icons/png/128/484/484167.png" alt="3" />
                                </div>
                                <div className={styled.subs}>{el.location}</div>
                            </div>
                        </div>
                        <div className={styled.flex}>
                            <div>
                                <img className={styled.img} src="https://img.icons8.com/pastel-glyph/32/000000/regular-document--v1.png" alt="4" />
                            </div>
                            <div className={styled.subs}>{el.description}</div>
                        </div>
                        <div className={styled.flex}>
                            <div className={styled.flex}>
                                <div>
                                    <img className={styled.img} src="https://img.icons8.com/android/50/000000/clock.png" alt="" />
                                </div>
                                <div className={styled.dateDiv}>
                                    <div className={styled.subs}>{el.date} days ago</div>
                                </div>
                            </div>
                            <div className={styled.flex} >
                                {/* <div>{el.techStack[0]}</div> */}
                                {/* {  (el.techStack.map(e=> (<div>{e}</div>)))} */}
                                {/* {el.techStack.map(e => (<div style={{ marginTop: "-10px" }}>{e.techStack} <ul><li> {e.techStack} </li></ul></div>))} */}
                                {/* {el.techStack.forEach(element =>  (<div>{element}hi</div>)
                               
                           )} */}
                            </div>


                            <div className={styled.flex} style={{ marginLeft: "61%" }}>
                                <div>
                                    <img className={styled.img} src="https://img.icons8.com/metro/50/000000/star.png" alt="" />
                                </div>
                                <div onClick={handleCount} className={styled.subs}>save</div>
                            </div>
                        </div>
                    </div>

                ))
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
