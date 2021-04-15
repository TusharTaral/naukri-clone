import React, { useRef, useState } from "react"

import { useAuth } from "./contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"
import styles from "./Login.module.css"

export default function Login() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const { login } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const history = useHistory()

  async function handleSubmit(e) {
    e.preventDefault()

    try {
      setError("")
      setLoading(true)
      await login(emailRef.current.value, passwordRef.current.value)
      history.push("/")
    } catch {
      setError("Failed to log in")
    }

    setLoading(false)
  }

  return (
    <div className={styles.outer}>
      
        <div>
          <h1 className={styles.regi}>Log In</h1>
          {error && <p variant="danger">{error}</p>}
          <form onSubmit={handleSubmit}>
            <div className={styles.outerName} id="email">
             
              <input className={styles.names}  placeholder="Email" type="email" ref={emailRef} required />
            </div>
            <div className={styles.outerName} id="password">
              
              <input className={styles.names}  placeholder="Password" type="password" ref={passwordRef} required />
            </div>
            <button disabled={loading} className={styles.btn} type="submit">
              Log In
            </button>
          </form>
          <div lassName={styles.acc} >
            <Link to="/forgot-password">Forgot Password?</Link>
          </div>
        </div>
    
      <h4 lassName={styles.acc} >
        Need an account? <Link to="/signup">Sign Up</Link>
      </h4>
    </div>
  )
}
