import React, { useContext, useState } from 'react'
import { useEffect } from 'react';
import { AiFillEdit, AiFillDelete} from 'react-icons/ai'
import { useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom'
import axios from 'axios'
import './SinglePost.css'
import { Context } from '../context/Context';
import { axiosInstance } from '../config';

function SinglePost() {

    const location = useLocation();
   // console.log(location.pathname.split("/")[2]);
    const path = location.pathname.split("/")[2];
    const {user} = useContext(Context)
    const [title,setTitle] = useState("")
    const [desc,setDesc] = useState("")
    const [updated,setUpdated] = useState(false)


     const [post, setPost]=useState({});
     const PF = "https://blogutt.herokuapp.com/image/";
    useEffect(()=>{
        const getPost = async ()=>{
            const response = await axiosInstance.get("/posts/"+path)
            console.log(response);
            setPost(response.data)
            setTitle(response.data.title);
            setDesc(response.data.desc);
        }
        getPost()
    }, [path])

    const handleDelete = async () =>{
        try{
            await axiosInstance.delete(`/posts/${post._id}`,{
                data: {username:user.username}
            });
            window.location.replace("/");
        }catch(err){
            console.log(err);
        }
    }

    const handleUpdate = async ()=>{
        try{
            await axiosInstance.put(`/posts/${post._id}`,{
                username:user.username,
                title,
                desc
            });
            setUpdated(false);
        }catch(err){
            console.log(err);
        }
    }

  return (
    <>
    <div className="single-box">
    {
        post.photo && <div className="Single-image">
        <img src={PF + post.photo} alt="" />
    </div>
    } 

    {
        updated ? <input type="text" value={title} className="updated-title" 
        autoFocus
        onChange={(e)=>setTitle(e.target.value)}
        />:(
            <>
            <div className="single-title">
        { <p>{title}</p> } 
    </div>
     
    <div className="auth-icon">
        <div className="auth">
            <Link to={`/?user=${post.username}`}>
             <p>Author : <span>{post.username}</span></p> 
             </Link>
        </div>
        <div className="icon">
                <AiFillEdit className='edit' onClick={()=>setUpdated(true)}/>
            <AiFillDelete className='delete' onClick={handleDelete}/> 
             {<div className="single-date">{new Date(post.createdAt).toDateString()}</div> } 
        </div>
    </div>
            </>
        )
    }
    
    {
        updated ? <textarea className='updated-Text' value={desc}
        onChange={(e)=>setDesc(e.target.value)}
        /> :(
            <>
             <div className="para">
                <p>
                {desc}  
                </p>
            </div>
            </>
        )
    }
    
    </div>
    {
        updated && (
            <button className='update-button' onClick={handleUpdate}>Update</button>
        )
    }
    </>
  )
}

export default SinglePost