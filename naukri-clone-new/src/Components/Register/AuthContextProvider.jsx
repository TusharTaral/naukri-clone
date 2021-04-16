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
   key:"",
   image:""
}
export const AuthContext=createContext()
const AuthContextProvider = ({children}) => {
    const[count,setCount]=useState(0)
    const [isAuth,setIsAuth]=useState(false)
    const [data,setData]=useState([])
    const [form ,setForm]=useState(obj)
    const value={
        isAuth,
        setIsAuth,
        form,
        setForm,
        data,setData,
        count,setCount
    }
  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContextProvider