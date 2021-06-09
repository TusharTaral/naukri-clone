import React from "react";
import styled from "styled-components";

const Div = styled.div`
   padding: .6rem;
   text-align:center;
   cursor:pointer;
   color:white;
   background:${(props)=>
    props.color==="primary"?"#4a90e2":
    props.color === "secondary"?"red":
    props.color === "tertiary"?"yellow":"silver"};
    &:hover {
        background:${(props)=>
            props.color==="primary"?"blue":
            props.color === "secondary"?"brown":
            props.color === "tertiary"?"green":"grey"}
    }
`
export const Button =({input,width=200,type})=>{
    return(
        <>
        <Div color={type} style={{width}}>{input}</Div>
        </>
    )
}