import React, { createContext, useState } from 'react'
const obj={
    name:"",
    email:"",
    mobile:"",
    work:"",
  education:"",
  course:"",
  specilization:"",
  univercity:"",
  type:"",
  passing:"",
  marks:"",
   birth:"",
   gender:"",
   permanant:"",
   hometown:"",
   pincode:"",
   marital:"",
   category:"",
   able:"",
   usa:"",
   passport:"",
   key:""
}
export const AuthContext=createContext()
const AuthContextProvider = ({children}) => {

    const [isAuth,setIsAuth]=useState(false)
    const [data,setData]=useState([])
    const [form ,setForm]=useState(obj)
    const value={
        isAuth,
        setIsAuth,
        form,
        setForm,
        data,setData,
    }
  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContextProvider