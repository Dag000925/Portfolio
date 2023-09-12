import React from 'react'
import { Link } from 'react-router-dom'
import './index.scss'
//import AnimatedLetters from '../AnimatedLetters';
//import { useState } from "react";
import Typewriter from 'typewriter-effect'

const Home = () => {
/*     const [letterClass, setLetterClass] = useState('text-animate')
    const helloArray = ['H', 'E', 'L', 'L', 'O', ' ' ,'W', 'O', 'R', 'L', 'D', '!']
    const nameArray = ['M','Y',' ','N','A','M','E',' ','I','S',' ','D', 'A', 'G',',']
    const majorArray = ['S','O','F','T','W','A','R','E',' ','E','N','G','I','N','E','E','R','I','N','G',' ','S','T','U','D','E','N','T'] */


    return (
        <div className = "container home-page">
            <div className = "text-zone">
                <h1>
                    <Typewriter    
                        options={{
                            autoStart: true,
                            loop: true,
                            delay: 160,
                            strings: ["Hello World!\nmy name is dag,\nSoftware Engineering Student"]
                            
                        }}
                    />
                </h1>
                <h2>
                Senior at Adelphi University
                </h2>
                
            </div>
            
        </div>
        
    )
}

export default Home