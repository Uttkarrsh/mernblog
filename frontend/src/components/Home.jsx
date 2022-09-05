import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import Header from './Home/Header'
import Posts from './Home/Posts'
// import axios from 'axios'
import { useLocation } from 'react-router-dom';
import { axiosInstance } from '../config';

function Home() {
  const [posts,setPosts]=useState([]);

  const {search} = useLocation();
  console.log(search);

  useEffect(()=>{
    const fetchPosts= async ()=>{
      const response = await axiosInstance.get('/posts'+search);
      console.log(response);
      setPosts(response.data);
    }
    fetchPosts();
  },[search])

  return (
    <>
    <Header />
    <Posts posts={posts} />
    </>
  )
}

export default Home