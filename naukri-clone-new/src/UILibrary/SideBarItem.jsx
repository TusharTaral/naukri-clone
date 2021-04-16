import React from "react";
import styled from "styled-components"

const Div = styled.div`
   overflow:auto;
   display:flex;
   justify-content:space-around;
   padding:0px 10px;
   padding-left:0px;
   width:max-content;
   color:grey;
`

export const SideBarItem = ({label,children})=>{
    return(
        <Div style={{}}>
              <Div>{children}</Div>
              <label>{label}</label>
        </Div>
    )
} 