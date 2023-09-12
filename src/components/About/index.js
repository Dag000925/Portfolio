import { faBasketball, faPersonHiking, faPersonRunning, faGamepad, faDumbbell, faNetworkWired } from '@fortawesome/free-solid-svg-icons'
import Typewriter from 'typewriter-effect'
import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



const About = () => {
    return (
        
        <div className='container about-page'>
            <div className="text-zone">
                <h1>
                    <Typewriter    
                        options={{
                            autoStart: true,
                            loop: true,
                            delay: 160,
                            strings: ["About Me"]
                            
                        }}
                    />
                </h1>
                <p>
                    I'm Dagvadorj Mendsaikhan, and I hail from the vibrant land of Mongolia. Currently, I'm a senior student at Adelphi University, 
                    pursuing a degree in Computer Science with a specialization in Software Engineering. My journey into the world of coding was 
                    ignited by a profound passion for problem-solving.
                </p>
                <p>
                    My time at Adelphi University has provided me with a strong foundation in computer science theory and 
                    practical application, and I'm eager to leverage this knowledge to make 
                    meaningful contributions in the field.

                </p>
                <p>
                    Confidence in one's abilities is a cornerstone of success, and I am genuinely confident in my coding skills. However, I firmly 
                    believe that the pursuit of knowledge is a lifelong journey. Despite my confidence, I remain a dedicated learner, always 
                    seeking new challenges and opportunities to expand my skill set.
                </p>
                <p>
                    I am excited to share my experiences and contributions with you as I continue to 
                    explore the endless possibilities that the world of computer science and software engineering has to offer. Thank you 
                    for visiting my website, and I look forward to connecting with you.
                </p>
            </div>
            
            <div className='stage-cube-cont'>
                <div className='cubespinner'>
                    <div className = 'face1'>
                        <FontAwesomeIcon icon={faBasketball}/>
                    </div>
                    <div className = 'face2'>
                        <FontAwesomeIcon icon={faPersonRunning}/>
                    </div>
                    <div className = 'face3'>
                        <FontAwesomeIcon icon={faNetworkWired}/>
                    </div>
                    <div className = 'face4'>
                        <FontAwesomeIcon icon={faDumbbell}/>
                    </div>
                    <div className = 'face5'>
                        <FontAwesomeIcon icon={faGamepad}/>
                    </div>
                    <div className = 'face6'>
                        <FontAwesomeIcon icon={faPersonHiking}/>
                    </div>

                </div>

            </div>

        </div>
        
        
    )
}

export default About