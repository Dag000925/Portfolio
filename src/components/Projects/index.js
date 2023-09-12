import './index.scss'
import Typewriter from 'typewriter-effect'
import React from 'react'
import 'react-slideshow-image/dist/styles.css'
import { Fade, Zoom, Slide } from 'react-slideshow-image'



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
                <p>
                    Created arcade games called Star Collector, Asteroids, Plane Dodger, Brick Breaker, using Javafx library
                </p>
                <p>
                    Games will be added here soon
                </p>
                <p>
                    I have acquired proficiency in several programming languages, including React.js, Java,C, Python, and C++.
                    My knowledge in these languages has been cultivated through a combination of formal classroom education
                    and self-guided learning. This diverse skill set enables me to work effectively on a wide range games and 
                    websites and tackle various programming challenges with confidence.
                </p>
                </div>

            </div>
        </>
    )
}

export default Projects