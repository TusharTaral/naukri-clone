import React, { useContext } from 'react'
import { AuthContext } from './AuthContextProvider'
import styles from "./Education.module.css"
import SigninNavbar from './SigninNavbar'
const Education = () => {
    const { form1, setForm1, data, setData} = useContext(AuthContext)
    const handleChange = (e) => {
        const { name, value } = e.target
        let paylaod = {
            ...form1,
            [name]: value
        }
        setForm1(paylaod)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        if (form1.name !== "" && form1.email!== ""&&form1.mobile!==""&&form1.work!=="")
        {
        let paylaod = [
            ...data,
            {
                education:form1.education,
                course:form1.course,
                specilization:form1.specilization,
                univercity:form1.univercity,
                type:form1.type,
                passing:form1.passing,
                marks:form1.marks
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
        <div className={styles.outer}>
            <div className={styles.flex}>
                <div className={styles.margin1}>Education :</div>
                <select className={styles.margin} onChange={handleChange} name="education">
                    <option value="PG">Post Graduation</option>
                    <option value="G">Graduation</option>
                    <option value="LESS10">less than 10th</option>
                    <option value="12TH">12th</option>
                    <option value="10TH">10th</option>
                </select>
            </div>
            <div className={styles.flex}>
                <div className={styles.margin1}>Course :</div>
                <select className={styles.margin} onChange={handleChange} name="course">
                    <option value="CS">ENGINEERING</option>
                    <option value="BSC">BSC</option>
                    <option value="BCOM">BCOM</option>
                </select>
            </div>
            <div className={styles.flex}>
                <div className={styles.margin1}>Specilization :</div>
                <select className={styles.margin} onChange={handleChange} name="specilization">
                    <option value="CS">COMPUTER ENGINEERING</option>
                    <option value="EE">ELECTRONICE ENGINEERING</option>
                    <option value="ME">MECHANICAL ENGINEERING</option>
                    <option value="CV">CIVIL ENGINEERING</option>
                    <option value="CE">CHEMICAL EMGINEERING</option>
                </select>
            </div>
            <div className={styles.flex}>
                <div className={styles.margin1}>Univercity :</div>
                <input className={styles.margin2} placeholder="  univercity" name="univercity" value={form1.univercity} onChange={handleChange} type="text" />
            </div>
            <div className={styles.flex}>
                <div className={styles.margin1}>Marks :</div>
                <input className={styles.margin2} placeholder="  marks" name="marks" value={form1.marks} onChange={handleChange} type="number" />
            </div>
            <div className={styles.flex}>
                <div className={styles.margin1}>Passing Year :</div>
                <input className={styles.margin2} placeholder="  passing year" name="passing" value={form1.passing} onChange={handleChange} type="number" />
            </div>
            <div className={styles.flex}>
                <div className={styles.margin1}>Course Type :</div>
                <select className={styles.margin} onChange={handleChange} name="type">
                    <option value="full">Full Time</option>
                    <option value="part">Part Time</option>
                    <option value="D">Distance</option>
                </select>
            </div>
            <button className={styles.btn} onClick={handleSubmit}>Register
     </button>
        </div>
        </>
    )
}

export default Education
