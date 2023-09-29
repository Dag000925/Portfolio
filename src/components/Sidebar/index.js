 import './index.scss';
 import { Link, NavLink } from 'react-router-dom'
 import Logos from '../../assets/images/logo.png'
 import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
 import { faBriefcase, faIdCard, faPaw, faUserNinja } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faFacebook } from '@fortawesome/free-brands-svg-icons';


const Sidebar = () => (
    <div className = 'nav-bar'>
        <Link className='logo' to='/'>
             <img src={Logos} alt="logo" />
        </Link>
        <nav>
            <NavLink exact="true" activeclassname="active" to="/">
                <FontAwesomeIcon icon={faPaw} />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="projects-link"to="/projects">
                <FontAwesomeIcon icon={faBriefcase} />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="about-link"to="/about">
                <FontAwesomeIcon icon={faUserNinja} />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="contact-link"to="/contact">
                <FontAwesomeIcon icon={faIdCard} />
            </NavLink>
        </nav>
        <ul>
            <li>
                <a target="_blank" rel="noreferrer" href = "https://www.linkedin.com/in/dagvadorj-mendsaikhan-97359a211/">
                    <FontAwesomeIcon icon={faLinkedin} />
                </a>
            </li>
            <li>
                <a target="_blank" rel="noreferrer" href = "https://www.facebook.com/7144324.D/">
                    <FontAwesomeIcon icon={faFacebook} />
                </a>
            </li>
        </ul>
    </div>
)

export default Sidebar 