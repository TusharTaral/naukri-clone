import React, { useRef, useState } from "react"
import { useAuth } from "./contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"
import styles from "./UpdateProfile.module.css"
import SigninNavbar from "./SigninNavbar"

export default function UpdateProfile() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const passwordConfirmRef = useRef()
  const { currentUser, updatePassword, updateEmail } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const history = useHistory()

  function handleSubmit(e) {
    e.preventDefault()
    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match")
    }

    const promises = []
    setLoading(true)
    setError("")

    if (emailRef.current.value !== currentUser.email) {
      promises.push(updateEmail(emailRef.current.value))
    }
    if (passwordRef.current.value) {
      promises.push(updatePassword(passwordRef.current.value))
    }

    Promise.all(promises)
      .then(() => {
        history.push("/")
      })
      .catch(() => {
        setError("Failed to update account")
      })
      .finally(() => {
        setLoading(false)
      })
  }

  return (
    <>
    <SigninNavbar/>
      <div className={styles.outer}>
        <div>
          <h2 className={styles.regi}>Update Profile</h2>
          {error && <p className={styles.err}>{error}</p>}
          <form onSubmit={handleSubmit}>
            <div id="email">
           
              <input className={styles.names}
                type="email"
                ref={emailRef}
                required
                defaultValue={currentUser.email}
              />
            </div>
            <div id="password">
            
              <input className={styles.names}
                type="password"
                ref={passwordRef}
                placeholder="pasword"
              />
            </div>
            <div id="password-confirm">
              
              <input className={styles.names}
                type="password"
                ref={passwordConfirmRef}
                placeholder="  Confirm  Password"
              />
            </div>
            <button disabled={loading} className={styles.btn}type="submit">
              Update
            </button>
          </form>
        </div>
      
      <div className={styles.acc}>
        <Link to="/"><h4 className={styles.link}> Cancel</h4></Link>
      </div>
    </div>
    </>
  )
}
