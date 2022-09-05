import React from 'react'
import Post from './Post'
import './Posts.css'
import {Link} from 'react-router-dom'

function Posts( {posts} ) {
  return (
    <>
    <p className='post-heading'>Posts</p>
   
     
      <div className="posts">
        {posts.map((p)=>(
          <div className="potsts" key={p.id}>
            <Post post={p}/>
          </div>
          
        ))}
      {/* <Link to='/post/:postId'>
    <Post />
    </Link>
      <Link to='/post/:postId'>
    <Post />
    </Link>
      <Link to='/post/:postId'>
    <Post />
    </Link>
      <Link to='/post/:postId'>
    <Post />
    </Link>
      <Link to='/post/:postId'>
    <Post />
    </Link>
      <Link to='/post/:postId'>
    <Post />
    </Link> */}
 
    </div>
   
    
    </>
  )
}

export default Posts