import React from 'react'
import './Resume.css'
import resume_img from '../../assets/resume1.jpg'
import theme from '../../assets/theme_pattern.svg'
const Resume = () => {
    return (
        <div id='resume' className='resume'>
            <div className='resume-img-section'>
                <div className='resume-title'>
                    <h1>My Resume</h1>
                    <img src={theme} alt="" />
                </div>
                 <img src={resume_img} title="Resume" className="resume-frame" />
            </div>
            {/* <img className='resume-img' src={resume_img} alt="" /> */}
            <div id='resume' className="resume-button">
                <a
                    href={resume_img}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <button className="view-resume-button">View Resume</button>
                </a>
            </div>


        </div>

    )
}

export default Resume
