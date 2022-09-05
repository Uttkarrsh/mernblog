import React from 'react'
import './Post.css'
import { Link } from 'react-router-dom'

function Post( {post} ) {
  const PF = "https://blogutt.herokuapp.com/image/";
  console.log(post.photo)
  return (
    <>
    <div className="post">
      {post.photo && <div className="post-image">
        <img src={PF+ post.photo} alt="" />
    </div> }
    
    <Link to={`/post/${post._id}`}>
    <div className="title">
        <p>{post.title}</p>
        <span>by {post.username}</span>
    </div>
    </Link>
    
    <hr />
    {/* <div className="desc">
        {post.description}
    </div> */}
    <div className="date">
        <p>{new Date(post.createdAt).toDateString()}</p>
    </div>
    </div>
    </>
  )
}

export default Post