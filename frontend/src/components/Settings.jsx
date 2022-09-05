import React from 'react'
import { useContext, useState } from 'react'
import { Context } from '../context/Context'
// import axios from 'axios'
import {AiFillEdit} from 'react-icons/ai'
// import { AiFillEdit } from 'react-icons/ai'
import './Settings.css'
import { axiosInstance } from '../config'

function Settings() {
    const { user, dispatch } = useContext(Context);
    const PF="https://blogutt.herokuapp.com/image/"
    
    const [username,setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [pass,setPass] = useState("");
    const [file,setFile] = useState(null)
    const [updated,setUpdated] = useState(false);
   

    const handleSubmit =async (e) =>{
        dispatch({type:"UPDATE_START"})
        e.preventDefault();
        const updatedUser = {
            userId:user._id,
            username,
            email,
            pass
        }
        if(file){
            const data= new FormData();
            const filename = file.name;
            data.append("name",filename);
            data.append("file",file);
            updatedUser.profilePic = filename;
            try{
                await axiosInstance.post("/upload",data)
            }catch(err){

            }
        }
        try{
           const respone= await axiosInstance.put("/user/"+user._id, updatedUser);
            setUpdated(true);
            dispatch({type:"UPDATE_SUCCESS", payload: respone.data})
            console.log(updated);
           // window.location.replace("/post/"+response.data._id);
        }catch(err){
            dispatch({type:"UPDATE_FAILURE"})
        }
        

    }

  return (
    <>
    <p className='setting-title'>
        Udpate Your Account
    </p>
    <div className="box-2">
        <div className="box-2-image">
        <div className="setting-image">
            <img src={ file? URL.createObjectURL(file) : PF+ user.profilePic} alt="" /> 
            <label htmlFor="file-set">
            <AiFillEdit className='setting-edit'/> 
            </label>
            
            <input type="file" id="file-set" style={{display:"none"}}
            onChange={(e)=>setFile(e.target.files[0])}
            />
        </div>
        </div>
        <div className="setting-input">
            <div className="name">
                <p>Name</p>
            <input type="text" placeholder={user.username} id="name"
            onChange={e=>setUsername(e.target.value)}
            />
            </div>
            <div className="name">
                <p>Email</p>
        <input type="email" placeholder={user.email} 
        onChange={e=>setEmail(e.target.value)}
        />
        </div>
        <div className="name">
            <p>Password</p>
        <input type="password" 
        onChange={e=>setPass(e.target.value)}
        />
        </div>
        </div>

        <div className="setting-button">
            <button onClick={handleSubmit}>
                Update
            </button>
            {
            updated && (
                <p className='span-updated'>
                    UPDATED
                </p>
            )
        }
        </div>
        

    </div>
    </>
  )
}

export default Settings

