import React, { createContext, useState } from 'react'
const obj={
    name:"",
    email:"",
    mobile:"",
    work:""
}
const obj1={
  education:"",
  course:"",
  specilization:"",
  univercity:"",
  type:"",
  passing:"",
  marks:""
}
export const AuthContext=createContext()
const AuthContextProvider = ({children}) => {

    const [isAuth,setIsAuth]=useState(false)
    const [data,setData]=useState([])
    const [form ,setForm]=useState(obj)
    const[form1,setForm1]=useState(obj1)
    const value={
        isAuth,
        setIsAuth,
        form,
        setForm,
        data,setData,
        form1,
        setForm1,
    }
  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContextProvider