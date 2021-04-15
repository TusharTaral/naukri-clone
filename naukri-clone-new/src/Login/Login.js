import React, { useEffect, useState } from 'react'
import { fire } from "./fire"
import LoginInput from './LoginInput'
import Temp from "./Temp"


export default function Login() {
    const [user, setUser] = useState('')
    const [email, setEmail] = useState(' ')
    const [password, setPassword] = useState('')
    const [emailError, setEmailError] = useState('')
    const [passwordError, setPasswordError] = useState('')
    const [hasAccount, setHasAccount] = useState(false)

    const clearInput = () => {
        setEmail("");
        setPassword("")
    }
    const clearError = () => {
        setEmailError("");
        setPasswordError("")
    }
    const handleLogin = () => {
        clearError()
        fire
            .auth()
            .signinWithEmailAndPassword(email, password)
            .catch(err => {
                switch (err.code) {
                    case "auth/invalid-email":
                    case "auth/user-disabled":
                    case "auth/user-not-found":
                        setEmailError(err.message)
                        break;
                    case "auth/wrong-password":
                        setPasswordError(err.message)
                        break;


                }
            })
    }


    const handleSignup = () => {
        clearError()
        fire
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .catch(err => {
                switch (err.code) {
                    case "auth/email-already-in-use":
                    case "auth/invalid-email":

                        setEmailError(err.message)
                        break;
                    case "auth/weak-password":
                        setPasswordError(err.message)
                        break;


                }
            })
    }
    const handleLogout = () => {
        fire.auth().signOut()
    }

    const authListener = () => {
        fire.auth().onAuthStateChanged(user => {
            if (user) {
                clearInput()
                setUser(user)
            } else {
                setUser('')
            }
        })
    }
    useEffect(() => {
        authListener()
    }, [])

    return (
        <div>
            {user?(
                 <Temp  handleLogout={handleLogout}/>
            ):(
                <LoginInput email={email}
                password={password}
                setEmail={setEmail}
                setPassword={setPassword}
                handleLogin={handleLogin}
                handleSignup={handleSignup}
                hasAccount={hasAccount}
                setHasAccount={setHasAccount}
                emailError={emailError}
                passwordError={passwordError}

            />
            )}

           
           


        </div>
    )
}
