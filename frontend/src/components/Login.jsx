// import axios from 'axios';
import React from 'react'
import { useContext } from 'react';
import { useRef } from 'react';
import { axiosInstance } from '../config';
import { Context } from '../context/Context';
import './Login.css'
function Login() {

    const userRef = useRef();
    const passRef = useRef();
    const { user,dispatch, isFetching } = useContext(Context);

    const handleSubmit = async (e) =>{
        e.preventDefault();
        dispatch({type:"LOGIN_START"})
        try{
            const response = await axiosInstance.post('/auth/login',{
                username: userRef.current.value,
                password: passRef.current.value
            });
            dispatch({type:"LOGIN_SUCCESS", payload: response.data});
        }catch(err){
            dispatch({type:"LOGIN_FAILURE"});
        }
    }

    console.log(user);
    //console.log(isFetching);

  return (
    <>
    <div className="container">
        <div className="login-heading">
            <p>Login</p>
        </div>
        <div className="login-name">
            <p>Username</p>
            <input type="text" placeholder='Username' 
            ref={userRef}/>
        </div>
        <div className="login-name">
            <p>Password</p>
            <input type="password" 
            ref={passRef}/>
        </div>
        <div className="login-button">
            <button onClick={handleSubmit}>Login</button>
        </div>
    </div>
    </>
  )
}

export default Login