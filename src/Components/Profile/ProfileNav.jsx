import React, { useContext } from 'react'
import { Redirect } from 'react-router-dom'
import styles from "./ProfileNav.module.css"
import { Link } from "react-router-dom"
import { AuthContext } from '../Register/AuthContextProvider'
const ProfileNav = () => {

    const { data } = useContext(AuthContext)


    return (
        <div>
            <header className={styles.header}>
                <ul className={styles.navbar} >
                    <div className={styles.image}>
                     <Link to="/">  <img src="https://static.naukimg.com/s/4/100/i/naukri_Logo.png" alt="logo" /></Link> 
                    </div>
                    <li className={styles.drop_one}>
                        <span>JOBS</span>
                        <div className={styles.menu_experiment}>
                            <div className={styles.menu_one}>
                                <ul>
                                    <li>Search jobs</li>
                                    <li>Advance searches</li>
                                    <li>Create free job alert</li>
                                    <li>Register now</li>
                                </ul>
                                <ul>
                                    <li>Job by location</li>
                                    <li>Job by location</li>
                                    <li>Job by location</li>
                                    <li>Job by location</li>
                                    <li>Job by location</li>
                                    <li>Job by location</li>
                                    <li>Job by location</li>
                                </ul>
                            </div>
                        </div>
                    </li>
                    <li className={styles.drop_two}>
                        <span>RECRUITERS</span>
                        <div className={styles.menu_experiment}>
                            <div className={styles.menu_two}>
                                <ul>
                                    <li>Browse All Recruiters</li>
                                    <li>SPECIAL OFFERS</li>
                                    <li>NEW REDEFINE</li>
                                </ul>
                            </div>
                        </div>
                    </li>
                    <li className={styles.drop_three}>
                        <span>COMPANIES</span>
                        <div className={styles.menu_experiment}>
                            <div className={styles.menu_three}>
                                <ul>
                                    <li>Browse All Companies</li>
                                    <li>About Companies</li>
                                    <li>Interview Questions</li>
                                    <li>Write Company Reviews</li>
                                    <li>Write Interview Advise</li>
                                    <li>Company Reviews </li>
                                    <li>Company Salaries</li>
                                </ul>
                            </div>
                        </div>
                    </li>
                    <li className={styles.drop_four}>
                        <span>TOOLS</span>
                        <div className={styles.menu_experiment}>
                            <div className={styles.menu_four}>
                                <ul>
                                    <li>Career Dashboard</li>
                                    <li>Your next Career</li>
                                    <li>Skills Trend</li>
                                    <li>Naukri Lab </li>
                                </ul>
                            </div>
                        </div>
                    </li>
                    <li className={styles.drop_five}>
                        <span>SERVICES</span>
                        <div className={styles.menu_experiment}>
                            <div className={styles.menu_five}>
                                <ul>
                                    <li><h3>Writing Resume</h3></li>
                                    <li>Text Resume</li>
                                    <li>Visual Resume</li>
                                    <li>Text Resume</li>
                                    <li>Visual Resume</li>
                                    <li><h3>Writing Resume</h3></li>
                                    <li>Text Resume</li>
                                    <li>Visual Resume</li>
                                </ul>
                                <ul>
                                    <li><h3>Writing Resume</h3></li>
                                    <li>Text Resume</li>
                                    <li>Visual Resume</li>
                                    <li>Text Resume</li>
                                    <li>Visual Resume</li>
                                    <li><h3>Writing Resume</h3></li>
                                    <li>Text Resume</li>
                                    <li>Visual Resume</li>
                                </ul>
                                <ul>
                                    <li><h3>Writing Resume</h3></li>
                                    <li>Text Resume</li>
                                    <li>Visual Resume</li>
                                    <li>Text Resume</li>
                                    <li>Visual Resume</li>
                                    <li>Text Resume</li>
                                    <li>Visual Resume</li>
                                    <li>Text Resume</li>
                                    <li>Visual Resume</li>
                                    <li><h3>Writing Resume</h3></li>
                                    <li>Text Resume</li>
                                    <li>Visual Resume</li>
                                    <li>Text Resume</li>
                                    <li>Visual Resume</li>
                                </ul>
                            </div>
                        </div>
                    </li>
                    <li className={styles.drop_six}>
                        <span>MORE</span>
                        <div className={styles.menu_experiment}>
                            <div className={styles.menu_six}>
                                <ul>
                                    <li><h3>Writing Resume</h3></li>
                                    <li>Text Resume</li>
                                    <li>Visual Resume</li>
                                    <li>Text Resume</li>
                                    <li>Visual Resume</li>
                                    <li><h3>Writing Resume</h3></li>
                                    <li>Text Resume</li>
                                    <li>Visual Resume</li>
                                </ul>
                                <ul>
                                    <li><h3>Writing Resume</h3></li>
                                    <li>Text Resume</li>
                                    <li>Visual Resume</li>
                                    <li>Text Resume</li>
                                    <li>Visual Resume</li>
                                    <li><h3>Writing Resume</h3></li>
                                    <li>Text Resume</li>
                                    <li>Visual Resume</li>
                                </ul>
                                <ul>
                                    <li><h3>Writing Resume</h3></li>
                                    <li>Text Resume</li>
                                    <li>Visual Resume</li>
                                    <li>Text Resume</li>
                                    <li>Visual Resume</li>
                                    <li>Text Resume</li>
                                    <li>Visual Resume</li>
                                    <li>Text Resume</li>
                                    <li>Visual Resume</li>
                                    <li><h3>Writing Resume</h3></li>
                                    <li>Text Resume</li>
                                    <li>Visual Resume</li>
                                    <li>Text Resume</li>
                                    <li>Visual Resume</li>
                                </ul>
                            </div>
                        </div>
                    </li>
                    <li><Link to="/login"><span>LOGOUT</span></Link></li>
                    <li><Link to="/personal"><span>Details</span></Link></li>
                    <li style={{ marginLeft: 100 }} className={styles.drop_seven}>
                        <span ><img style={{ borderRadius: 15 }} src="https://tse1.mm.bing.net/th?id=OIP.NQEEBmeQTCRCgi8AU_n2zQAAAA&pid=Api&P=0&w=30&h=30" alt="Icon" /></span>
                        <div className={styles.menu_experiment}>
                            <div className={styles.menu_seven}>
                                <ul>
                                    <li>Job recommendations</li>
                                </ul>
                            </div>
                        </div>
                    </li>
                    <li className={styles.drop_four}>
                        <span>FOR EMPLOYERS</span>
                        <div className={styles.menu_experiment}>
                            <div style={{ marginLeft: -70, paddingRight: 85, paddingLeft: 20 }} className={styles.menu_four}>
                                <ul>
                                    <li>Buy Online</li>
                                    <li>Employer Online</li>
                                </ul>
                            </div>
                        </div>
                    </li>
                </ul>
            </header>
        </div>
    )
}

export default ProfileNav
