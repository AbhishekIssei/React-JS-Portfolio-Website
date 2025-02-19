import { Link } from 'react-router-dom';
import './AboutContentStyles.css';
import img1 from "../assets/react1.jpg"
import img2 from "../assets/react2.webp"

import React from 'react'

const AboutContent = () => {
  return (
    <div className='about'>
        <div className='left'>
            <h1>Who Am I?</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, in.</p>
            <Link to="/contact"><button className='btn'>Contact</button></Link>
        </div>
        <div className='right'>
            <div className='img-container'>
                <div className='img-stack top'>
                    <img src={img1} className='img' alt="img" />
                </div>
                <div className='img-stack btm'>
                    <img src={img2} className='img' alt="img" />
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default AboutContent