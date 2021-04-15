import React, { useState } from "react"
import { addLoginFailure, addLoginRequest, addLoginSuccess, loginSuccess } from "../auth/authAction";
import {useDispatch, useSelector} from "react-redux";
import {Redirect} from "react-router-dom"
import axios from "axios";


const inState ={
    email:"",
    password:""
}

function Login(){
    const dispatch = useDispatch();
    const isAuth = useSelector((state)=>state.auth.isAuth)
    
    const [state,setState] = useState(inState)
    const {email,password} = state;
    const handleChange=(e)=>{
        const {value,name}=e.target
        const update = {
            ...state,[name]:value
        }
        setState(update)
    }
    
    const handleSubmit=(e)=>{
     e.preventDefault();
     const requestAction = addLoginRequest()
     dispatch(requestAction)
     return axios.post("https://reqres.in/api/login",{
        email,
        password
     })
     .then(res=>{
         const successAction = addLoginSuccess(res.data.token)
         dispatch(successAction)
         const action = loginSuccess();
         dispatch(action)
     }).catch(err=>{
         const errorAction =addLoginFailure(err)
         dispatch(errorAction)
     })
    }

   // console.log(isAuth)
   console.log(isAuth)
    if(isAuth){
       return <Redirect to ="/todo" push/>;
    }
   
    return(
        // isAuth?<Redirect to="/todo" push/>:
         (
            <div>
                <form onSubmit={handleSubmit}>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                    <label>email--</label>
                    <input type="email" placeholder="email" name="email"  onChange={handleChange} value={email}/>
                <br/>
                    <label>Password--</label>
                    <input type="text" placeholder="password" name="password" onChange={handleChange} value={password}/>
                <br/>
                    <input type="submit" value="Login"/>
                </form>
               
            </div>
        )       
    )
}

export {Login}