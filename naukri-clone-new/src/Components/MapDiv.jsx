import React, { useEffect, useState } from 'react'
import styled from "./MapDiv.module.css"
import axios from "axios"
const MapDiv = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        getData()
    }, [])

    function getData() {
        const requestParam = {
            method: 'get',
            url: 'https://json-server-vedanshw.herokuapp.com/naukri',
        }
        axios(requestParam)
            .then(response => setData(response.data))
            .catch(err => console.log(err));
    }
    console.log(data.map(e=>(e.techStack.map(el=>(<div>{el}</div>)))))
    
    return (
        <div>
            {
                data && data.map(el => (

                    <div className={styled.box}>
                        <h2 style={{ color: "black" }}>{el.companyName}</h2>
                        <h3>{el.skill}</h3>
                        <div className={styled.flex}>
                            <div className={styled.flex}>
                                <div>
                                    <img className={styled.img} src="https://www.flaticon.com/svg/vstatic/svg/25/25807.svg?token=exp=1618382093~hmac=410954768455049372b545d2b02695ed" alt="1" />
                                </div>
                                <div className={styled.margin}>{el.experience}</div>
                            </div>
                            <div className={styled.flex}>
                                <div>
                                    <img className={styled.img} src="https://image.flaticon.com/icons/png/128/25/25473.png" alt="2" />
                                </div>
                                <div className={styled.margin}>{el.salary}</div>
                            </div>
                            <div className={styled.flex}>
                                <div>
                                    <img className={styled.img} src="https://image.flaticon.com/icons/png/128/484/484167.png" alt="3" />
                                </div>
                                <div className={styled.margin}>{el.location}</div>
                            </div>
                        </div>
                        <div className={styled.flex}>
                            <div>
                                <img className={styled.img} src="https://t3.ftcdn.net/jpg/02/54/72/34/240_F_254723485_c9K810T1PALhco8AOE9oNsjlOUt2US2w.jpg" alt="4" />
                            </div>
                            <div className={styled.margin}>{el.description}</div>
                        </div>
                        <div className={styled.flex}>
                            <div className={styled.flex}>
                                <div>
                                    <img className={styled.img} src="https://t3.ftcdn.net/jpg/01/64/09/16/240_F_164091630_VaTUAAxbkt4NToNPfnWoPkfxEqmTVdJr.jpg" alt="" />
                                </div>
                                <div className={styled.margin}>{el.date}</div>
                    </div>
                         <div className={styled.flex} >
                             {/* <div>{el.techStack[0]}</div> */}
                       {/* {  (el.techStack.map(e=> (<div>{e}</div>)))} */}
                       {el.techStack.map(e=>(<div style={{marginTop:"-10px" }}>{e.techStack} <ul><li> {e.techStack} </li></ul></div>))}
                           {/* {el.techStack.forEach(element =>  (<div>{element}hi</div>)
                               
                           )} */}
                         </div>

                    
                            <div className={styled.flex} style={{ marginLeft: "10%" }}>
                                <div>
                                    <img className={styled.img} src="https://t3.ftcdn.net/jpg/02/12/94/86/240_F_212948692_hmAugxE54yt4XGzqCeImTZjNyYkAX7S4.jpg" alt="" />
                                </div>
                                <div className={styled.margin}>save</div>
                            </div>
                        </div>
                    </div>
                   
                ))


            }

        </div>
    )
}

export default MapDiv
