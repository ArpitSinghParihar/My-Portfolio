import React from 'react'
import './Resume.css'
import resume_img from '../../assets/resume.jpg'
import theme from '../../assets/theme_pattern.svg'
const Resume = () => {
    return (
        <div id='resume' className='resume'>
            <div className='resume-title'>
                <h1>My Resume</h1>
                <img src={theme} alt="" />
            </div>
            <img className='resume-img' src={resume_img} alt="" />
        </div>
    )
}

export default Resume
