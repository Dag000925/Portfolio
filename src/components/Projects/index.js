import './index.scss'
import Typewriter from 'typewriter-effect'
import React from 'react'
import 'react-slideshow-image/dist/styles.css'
import { Fade, Zoom, Slide } from 'react-slideshow-image'
import Turtle from '../../assets/images/turtle.png'


const Projects = () => {
    return(
        <>
            <div
             className='container projects-page'>
                <div className="text-zone">
                    <h1>
                        <Typewriter    
                        options={{
                            autoStart: true,
                            loop: true,
                            delay: 160,
                            strings: ["My Projects & Skills"]
                            
                        }}
                        />
                    </h1>
                
                </div>
                <div className = "carousel-item">
                    <img src = {Turtle} alt="turtle"></img>
                    <div>
                        
                    </div>
                </div>

            </div>
        </>
    )
}

export default Projects