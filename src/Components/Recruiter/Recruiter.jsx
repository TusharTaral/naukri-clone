import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import SigninNavbar from "../../Signin/SigninNavbar";
import { registerUser } from "../../Redux/RecruiterRedux/action";
import styles from "./Recruiter.module.css"
const initState = {
    companyName: "",
    skill: "",
    experience: "",
    salary: "",
    rating: "",
    reviews: "",
    date: "",
    location: "",
    isSave: "",
    description: ""
};

export const Recruiter = () => {
    const [form, setForm] = useState(initState);
    const isAuth = useSelector((state) => state.recruiter.isAuth);
    const dispatch = useDispatch();
    const handleChange = (e) => {
        const { name, value } = e.target;
        let payload = {
            ...form,
            [name]: value
        };
        setForm(payload);
    };
    // const today = new Date();
    // const year = today.getFullYear();
    // const mes = today.getMonth()+1;
    // const dia = today.getDate();
    // const fecha =dia+"-"+mes+"-"+year;
    // console.log(fecha)
    const handleRegister = () => {
        {
            let payload = {
                companyName: form.companyName,
                skill: form.skill,
                experience: form.experience,
                salary: form.salary,
                rating: Math.floor((Math.random() * 5) + 1) ,
                reviews: Math.floor((Math.random() * 500) + 1),
                date:0,
                location: form.location,
                isSave: false,
                description: form.description
            };
            dispatch(registerUser(payload));
            setForm(initState);
        }
        alert("job's successfully created")
    };
    return !isAuth ? (
        <div>
              <SigninNavbar/>
            <h1 style={{marginBottom:"40px"}}  className={styles.regi}>Hire the Right Talent</h1>
            <div  className={styles.outer}>
            <div className={`${styles.margin} ${styles.flex}`}>
                <div className={styles.margin1}> Company Name :</div>
                <input className={styles.margin2}
                 placeholder="company Name" 
                 name="companyName"
                 value={form.companyName} 
                 onChange={handleChange} 
                 type="text" />
            </div>
            <div className={`${styles.margin} ${styles.flex}`}>
                <div className={styles.margin1}> Skill :</div>
                <input className={styles.margin2}
                 placeholder="skill" 
                 name="skill"
                 value={form.skill} 
                 onChange={handleChange} 
                 type="text" />
            </div>
            <div className={`${styles.margin} ${styles.flex}`}>
                <div className={styles.margin1}> Salary :</div>
                <input className={styles.margin2}
                 placeholder="salary" 
                 name="salary"
                 value={form.salary} 
                 onChange={handleChange} 
                 type="text" />
            </div>
            {/* <div  className={styles.margin} className={styles.flex}>
                <div className={styles.margin1}> Date to post a job :</div>
                <input className={styles.margin2}
                 placeholder="date" 
                 name="date"
                 value={form.date} 
                 onChange={handleChange} 
                 type="date" />
            </div> */}
            <div className={`${styles.margin} ${styles.flex}`}>
                <div className={styles.margin1}> Experience :</div>
                <input className={styles.margin2}
                 placeholder="experience" 
                 name="experience"
                 value={form.experience} 
                 onChange={handleChange} 
                 type="text" />
            </div>
            <div className={`${styles.margin} ${styles.flex}`}>
                <div className={styles.margin1}> Location :</div>
                <input className={styles.margin2}
                 placeholder="location" 
                 name="location"
                 value={form.location} 
                 onChange={handleChange} 
                 type="text" />
            </div>
            <div className={`${styles.margin} ${styles.flex}`}>
                <div className={styles.margin1}> Description :</div>
                <input className={styles.margin2}
                 placeholder="description" 
                 name="description"
                 value={form.description} 
                 onChange={handleChange} 
                 type="text" />
            </div>

            <br />
            <button className={styles.btn}onClick={handleRegister}>REGISTER</button>
        </div>
        </div>
    ) 
    :
     (
            <Redirect to="/" />
       
     );
};
