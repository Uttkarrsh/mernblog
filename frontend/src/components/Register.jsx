import React from 'react'
import { useState } from 'react'
import './Register.css'
// import axios from 'axios'
import { axiosInstance } from '../config';

function Register() {

    const [username,setUsername] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [error,setError] = useState(false);

    const handleSubmit= async (e)=>{
        setError(false);
        e.preventDefault();
        try{
            const response = await axiosInstance.post("/auth/register",{
                username,
                email,
                password,
            })
            console.log(response);
            response.data && window.location.replace('/login');
        }catch(err){
            setError(true);
        }
        
    }

  return (
    <>
    <div className="container">
    <div className="login-heading">
        <p>Sign Up</p>
    </div>
    <div className="login-name">
        <p>Username</p>
        <input type="text" placeholder='Username' 
        onChange={e=>setUsername(e.target.value)}
        />
    </div>
    <div className="login-name">
        <p>Email</p>
        <input type="email" placeholder='Email' 
        onChange={e=>setEmail(e.target.value)}
        />
    </div>
    <div className="login-name">
        <p>Password</p>
        <input type="password" 
        onChange={e=>setPassword(e.target.value)}
        />
    </div>
    <div className="login-button">
        <button onClick={handleSubmit}>Sign Up</button>
    </div>
    <div className="wrong">
        {
            error && <p>
            Something Went Wrong
        </p>
        }
        
    </div>
</div>
</>
  )
}

export default Register