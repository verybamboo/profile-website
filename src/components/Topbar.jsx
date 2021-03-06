import React from "react";
import "../styles/Topbar.css"
import resume from "../resume/resume.pdf"

export default function Topbar()
{
  return (
    <div className="top-bar-div">
      <a href="#home" className="top-bar-home">Home
      </a>  
      <a href="#skills" className="top-bar-skills">Skills
      </a>
      <a href="#projects" className="top-bar-project">Projects
      </a>
      <a href="#profile" className="top-bar-profile">Profile
      </a>
      <a href="#contact" className="top-bar-contact">Contact
      </a>
      <a href={resume} download={resume} className="top-bar-contact">Resume
      </a>
   </div>
  )
}