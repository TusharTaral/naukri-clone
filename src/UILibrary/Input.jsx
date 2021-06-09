import React from "react";
import styled from "styled-components"

const Div = styled.div`
   display:flex;
   padding:10px;
   height:32px;
   border: 1.5px solid grey;
   box-shadow:0 0 3px silver;
   border-radius:3px;
`
const TextBox = styled.input`
   border:none; 
   height:15px;
   margin-top:7px;
   margin-left:12px;
   &:focus{
    outline:none;
   }

`

export const Input = ({label,children,type,placeholder,onChange,width=250,value,name,handleClick})=>{
    return(
        <Div style={{width}}>
              <div>{children}{label}</div>
              <TextBox type={type} placeholder={placeholder} onChange={onChange} value={value} onClick={handleClick} name={name} />
        </Div>
    )
} 