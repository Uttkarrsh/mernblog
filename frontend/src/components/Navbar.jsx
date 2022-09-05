import React, { useContext } from 'react'
import './Navbar.css'
import { RiMenu5Fill,RiCloseFill } from 'react-icons/ri'
import {Link} from 'react-router-dom'
import { Context } from '../context/Context'
import { useState } from 'react'

function Navbar() {
    const [isMobile, setIsMobile] = useState(false);
    const { user, dispatch } =useContext(Context);

    const handleLogout = () =>{
        dispatch({type: "LOGOUT"})
    }
    const PF = "https://blogutt.herokuapp.com/image/";
  return (
    <>
    <div className="main-nav">
    <div className="left-2">
            <Link to='/'>
            <h2>UBlog</h2>
            </Link>
        </div>
    <div className={isMobile ? "nav-mobile" : "nav"}
    onClick={()=>setIsMobile(false)}
    >
        
        <div className="left">
            <Link to='/'>
            <h2>UBlog</h2>
            </Link>
        </div>
       
        <div className="center">
            <Link to='/'>
            <p className='home'>HOME</p>
            </Link>
            <Link to='/about'>
            <p className='about'>ABOUT</p>
            </Link>
            
            <Link to='/write'>
            <p className='write'>WRITE</p>
            </Link>
            <Link to='/contact'>
            <p className='contact'>CONTACT</p>
            </Link>
            
            <p className='logout' onClick={handleLogout}>{user && "LOGOUT"}</p>
           
        </div>
        <div className="right">
            {
                user ? (
                    <>
                     <Link to='/setting'>
            <div className="img">
                <img src={PF + user.profilePic} alt="" />
            </div>
            </Link>
                    </>
                ) : (
                    <>
                     <Link to='/login'>
                     <p className='login'>LOGIN</p>
                     </Link>
                     <Link to='/register'>
                     <p className='login'>REGISTER</p>
            </Link>
                    </>  
                )
            }
        </div>
        
    </div>
    <button className='mobile' onClick={()=>setIsMobile(!isMobile)}>
           {isMobile ? <RiCloseFill className='close' /> : <RiMenu5Fill className='open' />}
        
            {/* <RiCloseFill /> */}
           </button>
   </div>
    </>
  )
}

export default Navbar