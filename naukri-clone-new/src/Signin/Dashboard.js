import React, { useState } from "react"
//import { Card, Button, Alert } from "react-bootstrap"
import { useAuth } from "./contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"

export default function Dashboard() {
  const [error, setError] = useState("")
  const { currentUser, logout } = useAuth()
  const history = useHistory()

  async function handleLogout() {
    setError("")

    try {
      await logout()
      history.push("/login")
    } catch {
      setError("Failed to log out")
    }
  }

  return (
    <>
      <div>
        <div>
          <h2 className="text-center mb-4">Profile</h2>
          {error && <p >{error}</p>}
          <strong>Email:</strong> {currentUser.email}
          <Link to="/update-profile" className="btn btn-primary w-100 mt-3">
            Update Profile
          </Link>
        </div>
      </div>
      <div className="w-100 text-center mt-2">
        <button variant="link" onClick={handleLogout}>
          Log Out
        </button>
      </div>
    </>
  )
}
