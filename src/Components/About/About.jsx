import React from 'react'
import './About.css'
import profile_img from '../../assets/Hero-img2.png'
import theme from '../../assets/theme_pattern.svg'
const About = () => {
  return (
    <div id='about' className='about'>
      <div className="about-title">
        <h1>About me</h1>
        <img src={theme} alt="" />
      </div>
      <div className="about-section">
        <div className="about-left">
            <img src={profile_img} alt="" />
        </div>
        <div className="about-right">
            <div className="about-para">
                <p>I’m a passionate and self-driven developer with a strong interest in building intelligent and interactive web applications. My work focuses on creating responsive and user-friendly interfaces</p>
                <p>Through this portfolio, I aim to share my journey, skills, and the real-world impact of the projects I’ve created.</p>
            </div>
            <div className="about-skills">
                <div className="about-skill"><p>HTML & CSS</p> <hr style={{width:"50%"}}/></div>
                <div className="about-skill"><p>React Js</p> <hr style={{width:"70%"}}/></div>
                <div className="about-skill"><p>JavaScript</p> <hr style={{width:"60%"}}/></div>
                <div className="about-skill"><p>ExpressJs</p> <hr style={{width:"50%"}}/></div>
                <div className="about-skill"><p>Java</p> <hr style={{width:"60%"}}/></div>
                <div className="about-skill"><p>Python</p> <hr style={{width:"50%"}}/></div>
                <div className="about-skill"><p>Data structure</p> <hr style={{width:"40%"}}/></div>
                <div className="about-skill"><p>Tailwind Css</p> <hr style={{width:"90%"}}/></div>
            </div>
        </div>
      </div>

    </div>
  )
}

export default About
