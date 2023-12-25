import "./HeroimageStyles.css"

import React from 'react'
import Introimg from "../assets/intro-img.jpg"
import { Link } from "react-router-dom"

const Heroimage = () => {
  return (
    <div className="hero">
        <div className="mask">
            <img className="into-img" src={Introimg} alt="Introimg" />
        </div>
        <div className="content">
            <p>HI,I'M A FRONTEND DEVELOPER</p>
            <h1>REACT DEVELOPER</h1>
            <div>
                <Link to="/project" className="btn">Project</Link>
                <Link to="/contact" className="btn btn-light">Contact</Link>
            </div>
        </div>
    </div>
  )
}

export default Heroimage