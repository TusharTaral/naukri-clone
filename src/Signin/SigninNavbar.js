import React from 'react'
import { Link } from 'react-router-dom'
import styles from "./SigninNavBar.module.css"
export default function SigninNavbar() {
    return (
        <div>
     
        <div className={styles.img}>
           <Link to="/"><img className={styles.img1} src="https://static.naukimg.com/s/5/104/i/naukri_Logo.png" alt="logo"></img></Link> 
        </div>
            
        </div>
    )
}
