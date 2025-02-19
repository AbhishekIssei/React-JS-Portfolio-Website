import React from 'react'
import './Footerstyles.css'
import { FaFacebook, FaHome, FaLinkedin, FaMailBulk, FaPhone } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-container'>
            <div className='left'>
                <div className='location'>
                    <FaHome size={20} style={{color:"#fff", marginRight:"2rem"}} />
                    <div>
                        <p>123 Housing Society.</p>
                        <p>India.</p>
                    </div>
                </div>
                <div className='contact'>
                        <h4><FaPhone size={20} style={{color:"#fff", marginRight:"2rem"}}/>123-456-7890</h4>
                </div>
                <div className='mail'>
                    <h4><FaMailBulk size={20} style={{color:"#fff", marginRight:"2rem"}}/>abhishek@gmail.com</h4>
                </div>
            </div>
            <div className='Right'>
                <h4>About The Company</h4>
                <p>This is me Abhishek Kotian. Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis deserunt odio nam praesentium reprehenderit? Corporis unde deleniti aliquid est a!</p>
                <div className='social'>
                <FaFacebook size={25} style={{color:"#fff", marginRight:"2rem"}} />
                <FaXTwitter size={25} style={{color:"#fff", marginRight:"2rem"}} />
                <FaLinkedin size={30} style={{color:"#fff", marginRight:"2rem"}} />
                </div>
            </div>

        </div>
    </div>
  )
}

export default Footer