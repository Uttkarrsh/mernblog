//import e from 'express';
import React from 'react'
import { useState } from 'react'
import {AiOutlinePlusSquare} from 'react-icons/ai'
import './Write.css'
//import axios from 'axios'
import { Context } from '../context/Context';
import { useContext } from 'react'
import {axiosInstance} from '../config'


function Write() {

    const [title,setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [file,setFile] = useState(null);
    const { user } = useContext(Context)

    const handleSubmit =async (e) =>{
        e.preventDefault();
        const newPost = {
            username:user.username,
            title,
            desc
        }
        if(file){
            const data= new FormData();
             const filename = file.name;
             data.append("name",filename);
             data.append("file",file);
             newPost.photo = filename;
            try{
                await axiosInstance.post("/upload",data)
            }catch(err){

            }
        }  
        try{
            const response = await axiosInstance.post("/posts", newPost);
            window.location.replace("/post/"+response.data._id);
        }catch(err){

        }
        

    }

  return (
    <>

        <div className="write-image">
            {
                file && (
                    <img src={URL.createObjectURL(file)} alt="" />
                )
            }
            
        </div>
        <form className='form' method='POST' action="/api/upload" enctype="multipart/form-data">
        
            <div className="write-text">
                
             <label htmlFor="file">
                <AiOutlinePlusSquare className='plus'/>
                <p>Add Image</p>
            </label>
            <input type="file" id="images" name="file" style={{display:"none"}}
            onChange={(e)=>setFile(e.target.files[0])} /> 
            <input type="text" placeholder='Title' className="text" autoFocus={true} onChange={e=>setTitle(e.target.value)}/>
            {/* <button>Publish</button> */}
            <div className="write-button">
                <button onClick={handleSubmit}>Publish</button>
            </div>
            </div>
            
            
            <div className="para1">
                <textarea placeholder='Write Here' type="text" className='text-area' onChange={e=>setDesc(e.target.value)}></textarea>
            </div>
            
        </form>
    
    </>
  )
}

export default Write