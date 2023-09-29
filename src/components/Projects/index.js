import './index.scss'
import Typewriter from 'typewriter-effect'
import React from 'react'
import 'react-slideshow-image/dist/styles.css'
import Turtle from '../../assets/images/turtle.png'
import Asteroid from '../../assets/images/asteroid.png'
import Brick from '../../assets/images/brick.png'
import Plane from '../../assets/images/plane.png'
import Tile from '../../assets/images/tile.png'
import Survival from '../../assets/images/survival.png'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@coreui/coreui/dist/css/coreui.min.css'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

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
                            strings: ["My Projects"]
                            
                        }}
                        />
                    </h1>
                    <p>
                        Developed a series of Java 
                        games <br/>Using BlueJ and JavaFX,     
                        including <br/>“Star Collector”, 
                        “Asteroids”, <br/>“Brick
                        Breaker”, “Plane Dodger”,<br/>
                        “Tile Adventure”, and 
                        “Sub Survival”.
                        
                    </p>
                    <p>
                        Utilized BlueJ as the 
                        integrated <br/>development 
                        environment for Java and <br/>
                        employed JavaFX for creating <br/>
                        the graphical
                        user interface and <br/>handling 
                        game graphics. Debugged and<br/> 
                        tested code to ensure smooth 
                        gameplay <br/>and fixed any
                        issues.
                    </p>
                    </div>
                
            </div>
            <Carousel className='slide' autoPlay infiniteLoop autoFocus useKeyboardArrows >
                <div>
                    <img src={Turtle}/>
                    <p>Star Collector</p>
                </div>
                <div>
                    <img src={Asteroid}/>
                    <p>Asteroid</p>
                </div>
                <div>
                    <img src={Plane}/>
                    <p>Plane Dodger</p>
                </div>
                <div>
                    <img src={Brick}/>
                    <p>Brick Breaker</p>
                </div>
                <div>
                    <img src={Tile}/>
                    <p>Tile Adventure</p>
                </div>
                <div>
                    <img src={Survival}/>
                    <p>Sub Survival</p>
                </div>
            </Carousel>
        </>
    )
}

export default Projects