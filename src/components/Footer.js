import "./FooterStyles.css"
import { FaGithub, FaHome, FaLinkedin, FaMailBulk, FaPhone } from "react-icons/fa"

import React from 'react'

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    <FaHome size={20} style={{color:"#fff", marginRight:"2rem"}}/>
                    <div>
                    <p>49B , Aruljothi nagar, Vadalur</p>
                    <p>Cuddalore, India</p>
                    </div>
                </div>
                <div className="phone">
                <h4><FaPhone size={20} style={{color:"#fff", marginRight:"2rem"}}/>
                8838022532</h4>
                </div>
                <div className="email">
                <h4><FaMailBulk size={20} style={{color:"#fff", marginRight:"2rem"}}/>
                dprathick22@gmail.com</h4>
                </div>
            </div>
            <div className="right">
                <h4>About me</h4>
                <p>This is me Prathick, Frontend developer. I enjoy developing new websites with new designs.</p>
                <div className="social">
                <a href="https://github.com/Prathick22" target="_blank" rel="noopener noreferrer">
                <FaGithub size={30} style={{color:"#fff", marginRight:"1rem"}}/>
                </a>
                <a href="https://www.linkedin.com/in/prathick-d-5b971a266?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
                <FaLinkedin size={30} style={{color:"#fff", marginRight:"1rem"}}/>
                </a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer