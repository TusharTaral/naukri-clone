import React, { useContext, useState } from 'react'
import styles from "./Details.module.css"
import { AuthContext } from './AuthContextProvider'
import { Link, Redirect } from 'react-router-dom'
import SigninNavbar from "../../Signin/SigninNavbar"
const Details = () => {
    const { form, setForm, data, setData } = useContext(AuthContext)
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
        // if (form.birth !== "" && form.gender !== "" && form.permanant !== "" && form.hometown !== ""
        // &&form.pincode !== "" && form.marital !== "" && form.category !== "" && form.able !== ""
        // && form.usa !== "" && form.passport !== "") {
            let paylaod = [
                ...data,
                {
                    image:form.image,
                    birth: form.birth,
                    gender: form.gender,
                    permanant: form.permanant,
                    hometown: form.hometown,
                    pincode:form.pincode,
                    marital: form.marital,
                    category: form.category,
                    able: form.able,
                    usa: form.usa,
                    passport: form.passport
                }
            ]
            setData(paylaod)
            setFlag(prev=>!prev)
        
        // else {
        //     alert("Enter all data");
        // }
    }
    return !flag?(
        <>
        <SigninNavbar/>

        <div className={styles.outer}>
             <div className={styles.flex}>
                <div className={styles.margin1}>Profile img :</div>
                <input className={styles.margin2} placeholder="image" name="image" value={form.image} onChange={handleChange} type="text" />
            </div>
            <div className={styles.flex}>
                <div className={styles.margin1}>Birth Date :</div>
                <input className={styles.margin2} placeholder="Date of Birth" name="birth" value={form.birth} onChange={handleChange} type="date" />
            </div>
            <div  className={styles.flex}>
            <div className={styles.margin1}>Gender :</div>
                <div className={styles.radio}>
                <input  onChange={handleChange}  type="radio" id="male" name="gender" value="male" />
                <label className={styles.radio1} for="male">Male</label>
                <input onChange={handleChange}  type="radio" id="female" name="gender" value="female" />
                <label className={styles.radio1} for="female">Female</label>
                <input onChange={handleChange}  type="radio" id="other" name="gender" value="other" />
                <label for="other"> Other</label>
                </div>
            </div>
            <div className={styles.flex}>
                <div className={styles.margin1}> Address :</div>
                <input className={styles.margin2} placeholder=" Address" name="permanant" value={form.permanant} onChange={handleChange} type="text" />
            </div>
            <div className={styles.flex}>
                <div className={styles.margin1}>Home-Town :</div>
                <input className={styles.margin2} placeholder="Home town" name="hometown" value={form.hometown} onChange={handleChange} type="text" />
            </div>
            <div className={styles.flex}>
                <div className={styles.margin1}>Pin Code:</div>
                <input className={styles.margin2} placeholder="pincode" name="pincode" value={form.pincode} onChange={handleChange} type="number" />
            </div>
            <div className={styles.flex}>
                <div className={styles.margin1}>Marital Status:</div>
                <select onChange={handleChange} className={styles.margin}name="marital">
                     <option>Select</option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                </select>
            </div>
            <div className={styles.flex}>
                <div className={styles.margin1}>Category:</div>
                <select onChange={handleChange} className={styles.margin}    name="category">
                <option>Select</option>
                    <option value="General">General</option>
                    <option value="OBC">OBC</option>
                    <option value="SC">SC</option>
                    <option value="ST">ST</option>
                </select>
            </div>
            <div className={styles.flex}>
            <div className={styles.margin1}>Are you Differently Abled? :</div>
                <div className={styles.radio}>
                <input onChange={handleChange} type="radio" name="able" value="yes" />
                <label className={styles.radio1} for="yes">Yes</label>
                <input onChange={handleChange} type="radio"name="able" value="no" />
                <label for="no">No</label>
                </div>
            </div>
            <div className={styles.flex}>
                <div className={styles.margin1}>Passport :</div>
                <select onChange={handleChange} className={styles.margin}  name="passport">
                <option>Select</option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                </select>
            </div>
            <div className={styles.flex}>
                <div className={styles.margin1}>Work Permit :</div>
                <select onChange={handleChange} className={styles.margin}  name="usa">
                <option>Select</option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                </select>
            </div>
            <div style={{display:"flex",width:'550px',marginLeft:"37%"}}>
            <button className={styles.btn} onClick={handleSubmit}>Next
     </button>
    <Link to="/"> <button className={styles.btn} >Cancel
     </button></Link>
     </div>
        </div>
        </>
    ):
    (
        <Redirect to="/profile"/>
       
    )
}

export default Details