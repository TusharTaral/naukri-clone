import React from "react";
import styled from "styled-components"

const Div = styled.div`
   overflow:auto;
   text-align:left;
   padding-left:20px;  
`

export const SideBar = ({children,width=250,height=50, background="silver"})=>{
    return(
        <>
        <Div style={{width,height,background}}>{children}</Div>
        </>
    )
} 

{/* <SideBar height="200px" width="150px">
<h4>category</h4>
<SideBarItem label="checked">
 <input type="checkbox"/>
</SideBarItem>
<SideBarItem label="checked">
 <input type="checkbox"/>
</SideBarItem>
</SideBar> */}