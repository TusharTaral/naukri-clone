import React from "react"
import {useDispatch, useSelector} from "react-redux";
import {  getTodoFailure } from "./action";
import {TodoInput} from "./TodoInput"
import {getTodo,addTodo} from "./action"
import {addTodoRequest} from "./action"
import { logoutSuccess } from "../auth/authAction";
import {Redirect} from "react-router-dom"

const Todo =()=>{

    const dispatch = useDispatch();
    const {data:todo} = useSelector((state)=> state.app.todo )
    const {isLoading} = useSelector((state)=>  state.app.todo  )
    const  {isError} = useSelector((state)=>  state.app.todo )

    //console.log(isError)
const handleAdd1 =(payload)=>{
 // console.log(payload)
  dispatch(addTodo(payload))
  .then((res)=>{
     dispatch( getTodo())
  }).catch(err=>{
    const errorAction =getTodoFailure(err)
     dispatch(errorAction)
  })
};


    React.useEffect(()=>{
       dispatch( getTodo());
    },[])
//console.log(isLoading,isError)

const isAuth = useSelector((state)=>state.auth.isAuth);

const handleLogout=()=>{
    
    const action = logoutSuccess();
    dispatch(action)
}

if(!isAuth){
  return  <Redirect path="/" push/>;
}
//console.log(isAuth)

return (
    (
    <div>
        <button onClick={handleLogout}>Logout</button>
        <TodoInput onClick={handleAdd1}/>
        <div>
            {isLoading?<div>...loading</div>:isError?<div>something went wrong</div>:
               ( todo && todo.map((item)=>{
                    return <div key={item.id}>{item.title}</div>
                }))
            }
        </div>
    </div>
))
}

export {Todo}