import React, { useRef, useState } from "react"
import styles from "./ForgotPassword.module.css"
import { useAuth } from "./contexts/AuthContext"
import { Link } from "react-router-dom"
import SigninNavbar from "./SigninNavbar"

export default function ForgotPassword() {
  const emailRef = useRef()
  const { resetPassword } = useAuth()
  const [error, setError] = useState("")
  const [message, setMessage] = useState("")
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()

    try {
      setMessage("")
      setError("")
      setLoading(true)
      await resetPassword(emailRef.current.value)
      setMessage("Reset link send to your register Email address")
    } catch {
      setError("Failed to reset password")
    }

    setLoading(false)
  }

  return (
    <>
    <SigninNavbar/>
    <div className={styles.outer}>
     
        <div>
          <h1 className={styles.regi}>Password Reset</h1>
          {error && <p className={styles.err}>{error}</p>}
          {message && <p className={styles.succ}>{message}</p>}
          <form onSubmit={handleSubmit}>
            <div className={styles.outerName} id="email">
             
              <input className={styles.names} placeholder="Enter Email" type="email" ref={emailRef} required />
            </div>
            <button disabled={loading} className={styles.btn}type="submit">
              Reset Password
            </button>
          </form>
          <div >
            <Link to="/login"><h4 className={styles.link} >Login</h4></Link>
          </div>
        </div>
      
      <div >
        Need an account? <Link to="/signup"> <h4 className={styles.link} >Sign Up</h4></Link>
      </div>
    </div>
    </>
  )
}
