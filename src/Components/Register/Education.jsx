import React, { useContext, useState } from 'react'
import { Link, Redirect } from 'react-router-dom'
import { AuthContext } from './AuthContextProvider'
import styles from "./Education.module.css"
import SigninNavbar from '../../Signin/SigninNavbar'
const Education = () => {
    const { form, setForm, data, setData} = useContext(AuthContext)
    const [flag,setFlag]=useState(false)
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
        if (form.education !== "" && form.course!== ""&&form.specilization!==""&&form.univercity!==""
        && form.type!== ""&&form.passing!=="")
        {
        let paylaod = [
            ...data,
            {
                education:form.education,
                course:form.course,
                specilization:form.specilization,
                univercity:form.univercity,
                type:form.type,
                passing:form.passing,
                marks:form.marks
            }
        ]
        setData(paylaod)
        setFlag(true)
    }
    else {
        alert("Enter all data");
      }
    }
    return !flag?(
        <>
        <SigninNavbar/>
        <div className={styles.outer}>
            <div className={styles.flex}>
                <div className={styles.margin1}>Education :</div>
                <select className={styles.margin} onChange={handleChange} name="education">
                    <option>Select</option>
                    <option value="Post Graduation">Post Graduation</option>
                    <option value="Graduation">Graduation</option>
                    <option value="less than 10th">less than 10th</option>
                    <option value="12TH">12th</option>
                    <option value="10TH">10th</option>
                </select>
            </div>
            <div className={styles.flex}>
                <div className={styles.margin1}>Course :</div>
                <select className={styles.margin} onChange={handleChange} name="course">
                <option>Select</option>

                    <option value="ENGINEERING">ENGINEERING</option>
                    <option value="BSC">BSC</option>
                    <option value="BCOM">BCOM</option>
                </select>
            </div>
            <div className={styles.flex}>
                <div className={styles.margin1}>Specilization :</div>
                <select className={styles.margin} onChange={handleChange} name="specilization">
                <option>Select</option>
                    <option value="COMPUTER ENGINEERING">COMPUTER ENGINEERING</option>
                    <option value="ELECTRONICE ENGINEERING">ELECTRONICE ENGINEERING</option>
                    <option value="MECHANICAL ENGINEERING">MECHANICAL ENGINEERING</option>
                    <option value="CIVIL ENGINEERING">CIVIL ENGINEERING</option>
                    <option value="CHEMICAL EMGINEERING">CHEMICAL EMGINEERING</option>
                </select>
            </div>
            <div className={styles.flex}>
                <div className={styles.margin1}>University :</div>
                <input className={styles.margin2} placeholder="  university" name="univercity" value={form.univercity} onChange={handleChange} type="text" />
            </div>
            <div className={styles.flex}>
                <div className={styles.margin1}>Marks :</div>
                <input className={styles.margin2} placeholder="  marks" name="marks" value={form.marks} onChange={handleChange} type="number" />
            </div>
            <div className={styles.flex}>
                <div className={styles.margin1}>Passing Year :</div>
                <input className={styles.margin2} placeholder="  passing year" name="passing" value={form.passing} onChange={handleChange} type="number" />
            </div>
            <div className={styles.flex}>
                <div className={styles.margin1}>Course Type :</div>
                <select className={styles.margin} onChange={handleChange} name="type">
                <option>Select</option>
                    <option value="Full Time">Full Time</option>
                    <option value="Part Time">Part Time</option>
                    <option value="Distance">Distance</option>
                </select>
            </div>
            <div style={{display:"flex",width:'550px',marginLeft:"36%"}}>
            <button className={styles.btn} onClick={handleSubmit}>Next
     </button>
    <Link to="/"> <button className={styles.btn} >Cancel
     </button></Link>
     </div>
        </div>
        </>
    ):
    (
        <Redirect to="/details"/>
    )
}

export default Education
