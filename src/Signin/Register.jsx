import React, { useState } from "react";
import styles from "./Register.module.css"

const initState = {
  name: "",
  email: "",
  password: "",
  city: "",
  mobile: "",
};

export const Register = () => {
  const [form, setForm] = useState(initState);
  const[data,setData]=useState([])
  const handleChange = (e) => {
    const { name, value } = e.target;
    let payload = {
      ...form,
      [name]: value
    };
    setForm(payload);
  };
  const handleRegister = () => {
    if (
      form.name !== "" &&
      form.email !== "" &&
      form.password !== "" &&
      form.mobile !== "" &&
      form.city !== "" 
    ) {
      let payload = {
        name: form.name,
        email: form.email,
        password: form.password,
        city: form.city,
        mobile: form.mobile,
      };
      setData(payload)
      setForm(initState);
    } else {
      alert("Enter all data");
    }
  };
  return  (
    
    <div className={styles.outer}>
      <h1 className={styles.regi}>Register </h1>
      <div className={styles.outerName}  >
        {/* Name:{" "} */}
        <input  className={styles.names} className={styles.names}
        placeholder='Enter full name'
          value={form.name}
          name="name"
          onChange={handleChange}
          type="text"
        />
      </div>
      <br />
      <div className={styles.outerName} >
        {/* Email:{" "} */}
        <input  className={styles.names}
        placeholder="Enter Email Address"
          value={form.email}
          name="email"
          onChange={handleChange}
          type="email"
        />
      </div>
      <br />
      <div className={styles.outerName} >
        {/* Create_Password:{" "} */}
        <input  className={styles.names}
        placeholder="Enter Password"
          value={form.password}
          name="password"
          onChange={handleChange}
          type="password"
        />
      </div>
      <br />
      <div className={styles.outerName} >
        {/* Mobile:{" "} */}
        <input  className={styles.names}
        placeholder="Enter Mobile Number"
          value={form.mobile}
          name="mobile"
          onChange={handleChange}
          type="number"
        />
      </div>
      <br />
      <div className={styles.outerName} >
        {/* City:{" "} */}
        <input  className={styles.names}
        placeholder="Enter City Name"
          value={form.city}
          name="city"
          onChange={handleChange}
          type="text"
        />
      </div>
     
      <div style={{textAlign:"center",marginLeft:"4%"}}>
      <div style={{display:"flex"}} >
      <input style={{marginTop:"5px"}} type="checkbox"></input>
        <p>I agree to the Terms and Conditions and Privacy Policy governing the use of Naukri.com</p>
      
      </div>
      </div>
      <br />
      <button  className={styles.btn} onClick={handleRegister}>REGISTER NOW</button>
    </div>
  )
};