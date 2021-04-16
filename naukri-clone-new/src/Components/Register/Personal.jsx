import React, { useContext, useState } from 'react'
import styles from "./Register.module.css"
import { AuthContext } from './AuthContextProvider'
import  SigninNavbar from "./SigninNavbar"
const Personal = () => {
    const { form, setForm, data, setData} = useContext(AuthContext)
    const handleChange = (e) => {
        const { name, value } = e.target
        let paylaod = {
            ...form,
            [name]: value
        }
        setForm(paylaod)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        if (form.name !== "" && form.email!== ""&&form.mobile!==""&&form.work!=="")
        {
        let paylaod = [
            ...data,
            {
                name: form.name,
                email: form.email,
                mobile: form.mobile,
                work: form.work
            }
        ]
        setData(paylaod)
    }
    else {
        alert("Enter all data");
      }
    }
    return (
        <>
        <SigninNavbar/>
        <div  className={styles.outer}>
            
            <div className={styles.flex}> 
                <div className={styles.margin1}>Name :-</div>
                <input className={styles.margin} placeholder="Full Name" name="name" value={form.name} onChange={handleChange} type="text" />
            </div>
            <div className={styles.flex}>
                <div className={styles.margin1}>Email ID :-</div>
                <input className={styles.margin} placeholder="Email" name="email" value={form.email} onChange={handleChange} type="text" />
            </div>
            <div className={styles.flex}>
                <div className={styles.margin1}>Mobile Number :-</div>
                <input className={styles.margin} placeholder="Mobile Number" name="mobile" value={ form.mobile} onChange={handleChange} type="number" />
            </div>
            <div className={styles.flex}>
                <div className={styles.margin1}>Work Experiance :-</div>
                <input className={styles.margin} placeholder="Work experiance" name="work" value={form.work} onChange={handleChange} type="number" />
            </div>
            <button className={styles.btn} onClick={handleSubmit}>Register
     </button>
        </div>
        </>
    )
}

export default Personal
