import React from 'react'
import './Hero.css'
import hero from "../../assets/Hero-img2.png"
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
    return (
        <div id='home' className='hero' >
            <img src={hero} alt="" />
            <h1><span>I'm Arpit Singh Parihar,</span>specialized in Mern Stack</h1>
            <p>To showcase my skills in web development and voice assistant technologies by presenting innovative projects, My goal is to create responsive, intelligent, and user-friendly applications that reflect both technical strength and creative problem-solving.
            </p>
            <div className="hero-action">
                <a href="https://wa.me/919691380973" target="_blank" rel="noopener noreferrer">
                    <div className="hero-connect">Chat with me</div>
                </a>
                <div className="hero-resume"><AnchorLink className='anchor-link' offset={50} href='#resume'>My resume</AnchorLink></div>

            </div>
        </div>
    )
}

export default Hero
