import React from 'react'

export default function LoginInput({email,password ,setEmail,
    handleSignup,
    hasAccount, emailError,
    setHasAccount ,passwordError,
    setPassword ,handleLogin}) {
   
    return (
        <div>
            <section>
                <div>
                    <label> username    </label>
                    <input type="text" autoFocus required value={email}onChange={e=>setEmail(e.target.value)}/>
                    <p>{emailError}</p>
                    <label> password    </label>
                    <input type="password"  required value={password}onChange={e=>setPassword(e.target.value)}/>
                    <p>{passwordError}</p>

                    <div>
                        {hasAccount?(
                            <>
                            <button onClick={handleLogin}>Sign in</button>
                            <p>Don't have an Account ?<span onClick={()=>setHasAccount(!hasAccount)}>Sign up</span></p>
                            </>
                        )
                        :(
                            <>
                            <button onClick={handleSignup}>sign up</button>
                            <p>Have an Account?<span onClick={()=>setHasAccount(!hasAccount)}>sign in</span></p>
                            </>
                        )}
                    </div>
                </div>
            </section>
            
        </div>
    )
}
