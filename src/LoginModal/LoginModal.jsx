import React,{useRef,useEffect,useCallback} from "react";
import styled from "styled-components";
import {MdClose} from "react-icons/md";
import{useSpring,animated} from "react-spring";
import Routes from "../Signin/Routes"
import Login from "../Signin/Login"

const Background =styled.div`
 width:100%;
 height:100vh;
 background: rgba(0,0,0,0.8);
 position:fixed;
 display:flex;
 justify-content:flex-end;
 z-index:20;
`

const ModalWrapper = styled.div`
width:500px;
height:100vh;
box-shadow: 0 5px 16px rgba(0,0,0,0.2);
background:#fff;
color:#000;
position:relative;
z-index:100;
`
const CloseModalButton = styled(MdClose)`
cursor :pointer;
position:absolute;
top: 20px;
right:20px;
width:50px;
padding:0;
z-index:120;
`

export const LoginModal=({showModal,setShowModal})=>{
    const modalRef = useRef()

    const animation  = useSpring({
        config:{
            duration :250
        },
        opacity:showModal?1:0,
        transform:showModal?`translateX(0%)`:`translateX(100%)`
    })

    const closeModal = e=>{
        if(modalRef.current===e.target){
            setShowModal(false)
        }
    }
    
    const keyPress = useCallback(e=>{
        if(e.key==="Escape"&&showModal){
            setShowModal(false)
        }
    },[setShowModal,showModal])

    useEffect(()=>{
        document.addEventListener("keydown",keyPress);
        return()=>document.removeEventListener("keydown",keyPress)
    },[keyPress]);


    return(
        <>
        { showModal?(
            <Background ref={modalRef} onClick={closeModal}>
                <animated.div style={animation}>
                    <ModalWrapper showModal={showModal}>                     
                        <div style={{display:"flex",justifyContent:"space-around"}}>
                        <CloseModalButton  aria-label="Close-modal" onClick={()=>setShowModal(prev=>!prev)}/>
                            <h4>Login</h4>
                            <p>Register for free</p>
                            {/* <Routes/> */}
                            <Login/>
                        </div>
                    </ModalWrapper>
                </animated.div>
            </Background>
        ):null}
        </>
    )
}

