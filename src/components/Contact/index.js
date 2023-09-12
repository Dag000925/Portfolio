import './index.scss'
import Typewriter from 'typewriter-effect'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'


const Contact = () => {
    const refForm = useRef()

    const sendEmail = (e) =>{
        e.preventDefault()

        emailjs
            .sendForm(
                'default_service',
                'template_ub3lxst',
                refForm.current,
                'DU02ew3udKnn5Jj77DzQp'

            )
            .then(
                () => {
                    alert('Message successfully sent!')
                },
                () => {
                    alert('Failed to send the message, try again')
                }
            )
    }
    return (
        <div className = "container contact-page">
            <div className="text-zone">
                <h1>
                    <Typewriter    
                        options={{
                            autoStart: true,
                            loop: true,
                            delay: 160,
                            strings: ["Contact Me"]
                            
                        }}
                    />
                </h1>
                {/* <p>
                    Contact to say Hi and more
                </p> */}
                <div className="contact-form">
                    <form ref={refForm} onSubmit={sendEmail}>
                        <ul>
                            <li>
                                <input type="text" name="name" placeHolder="Your Name" required/>
                            </li>
                            <li>
                                <input type="text" name="email" placeHolder="Your Email" required/>
                            </li>
                            <li>
                                <input type="text" name="subject" placeHolder="Subject" required/>
                            </li>
                            <li>
                                <textarea placeHolder="Message" name="message" required/>
                            </li>
                            <li>
                                <input type="submit" className='flat-button' value="Send"/>
                            </li>
                        </ul>
                    </form>
                </div>

            </div>

        </div>
    )
}

export default Contact