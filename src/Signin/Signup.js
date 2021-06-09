import React, { useRef, useState } from "react"
import styles from "./Signup.module.css"
import { useAuth } from "./contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"
import SigninNavbar from "./SigninNavbar"

export default function Signup() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const passwordConfirmRef = useRef()
  const { signup } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const history = useHistory()

  async function handleSubmit(e) {
    e.preventDefault()

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match")
    }

    try {
      setError("")
      setLoading(true)
      await signup(emailRef.current.value, passwordRef.current.value)
      alert("account successfully created")
      history.push("/login")
    } catch {
      setError("Failed to create an account")
    }

    setLoading(false)
  }

  return (
    <>
    <SigninNavbar/>
    <div className={styles.outer}>
      <div >
       
          <h1 className={styles.regi}>Sign Up</h1>
          {error && <p className={styles.err}>{error}</p>}
          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.outerName}  id="email">
              
              <input placeholder="Email" className={styles.names}  type="email" ref={emailRef} required />
            </div>
            <div className={styles.outerName}  id="password">
            
              <input placeholder="Password"  className={styles.names}  type="password" ref={passwordRef} required />
            </div>
            <div className={styles.outerName}  id="password-confirm">
             
              <input placeholder="Password Confirmation"   className={styles.names}  type="password" ref={passwordConfirmRef} required />
            </div>
            <button disabled={loading} className={styles.btn}  type="submit">
              Sign Up
            </button>
          </form>
        </div>
      
      <h4 className={styles.acc} >
        Already have an account? <Link className={styles.link}  to="/login"><h4  className={styles.link} >Log In</h4></Link>
      </h4>
    </div>
    </>
  )
}
