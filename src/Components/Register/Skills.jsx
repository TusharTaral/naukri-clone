import React, { useContext } from 'react'
import { AuthContext } from './AuthContextProvider'
import styles from "./Register.module.css"
const Skills = () => {
    const { form, setForm, data, setData } = useContext(AuthContext)
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
        if (form.key !== "") {
            let paylaod = [
                ...data,
                {
                 key:form.key
                }
            ]
            setData(paylaod)
        }
        else {
            alert("Enter all data");
        }
    }
  return (
    <div>
        <h1>Key Skill</h1>
        <p>Tell recruiters what you know or what you are known for e.g. Direct Marketing, Oracle, Java etc. We will send you job recommendations based on these skills. Each skill is separated by a comma. Max limit is 250 character(s) including commas.</p>
        <div className={styles.flex}>
                <div className={styles.margin1}>Key Skills:</div>
                <input className={styles.margin} placeholder="key Skill" name="key" value={form.key} onChange={handleChange} type="number" />
        </div>
        <button style={{
                margin: "20px", backgroundColor: "slateblue",
                width: "150px", height: "50px", borderRadius: "10px",
                marginLeft: "700px"
            }} onClick={handleSubmit}>Register
     </button>
    </div>
  )
}

export default Skills
