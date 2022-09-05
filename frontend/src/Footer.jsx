import React from 'react'
import { BsInstagram, BsTwitter, BsGithub} from 'react-icons/bs'
import {TbBrandMeta} from 'react-icons/tb'
//import './Footer.css'

function Footer() {
  return (
    <>
    <div className="foot">
    <div className="icons">
    <TbBrandMeta className='f-icons'/>
    <BsInstagram className='f-icons'/>
    <BsTwitter className='f-icons'/>
    <BsGithub className='f-icons'/>
    <p className='f-p'>
        All RIghts Reserved
    </p>
    </div>
    </div>
    
    
    </>
  )
}

export default Footer