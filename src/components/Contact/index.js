import './index.scss'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'


const Contact = () => {
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_20jnwfi', 'template_1h61t8u', form.current, 'fXW49S5_MvzFDU8l5')
      .then((result) => {
          console.log(result.text);
          console.log("Message Sent Successfully")
      }, (error) => {
          console.log(error.text);
      });
  };
    return (
        <div className="contact-form">
                <form ref={form} onSubmit={sendEmail}>
                    <ul>
                        <li>
                            <input type="text" name="from_name" placeholder="Your Name" required/>
                        </li>
                        <li>
                            <input type="email" name="to_name" placeholder="Your Email" required/>
                        </li>
                        <li>
                            <textarea placeholder="Message" name ="message" required />
                        </li>
                        <li>
                            <input type="submit" value="Send"/>
                        </li>
                    </ul>
                </form>
            
        </div>
    )
}

export default Contact