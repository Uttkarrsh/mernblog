import React from 'react'
import './About.css'

function About() {
  return (
    <>
    <div className="about-box"> 
        <div className="about-info">
            <h1>About</h1>
            <div className="about-para">
            <h3>
              This is a Crytp Blog Application.
              Here you can write blog about blockchain, cryptocurrencies or any news related Blockchain.
            </h3>
              </div>
        </div>
        <div className="about-image">
            <img src="https://images.pexels.com/photos/844124/pexels-photo-844124.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
        </div>
    </div>
    </>
  )
}

export default About