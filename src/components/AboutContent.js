import "./AboutContentStyles.css"

import React from 'react'
import { Link } from "react-router-dom"
import img1 from "../assets/img1.png"
import img from "../assets/img.jpg"

const AboutContent = () => {
  return (
    <div className="about">
        <div className="left">
            <h1>Who Am I?</h1>
            <p>Passionate Front-End Developer specializing in HTML, CSS, and JavaScript, with expertise in React.js. I craft seamless user interfaces, bringing designs to life with precision and creativity. Proficient in translating UI/UX concepts from Figma into responsive and engaging web applications. Committed to delivering visually stunning and functional digital experiences.</p>
            <Link to="/contact">
                <button className="btn">Contact</button>
            </Link>
        </div>
        <div className="right">
            <div className="img-container">
                <div className="img-stack-top">
                    <img src={img} className="img" alt="img"/>
                </div>
                <div className="img-stack-bottom">
                    <img src={img1} className="img" alt="img"/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutContent