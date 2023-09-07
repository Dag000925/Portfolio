 import './index.scss';
 import { Link, NavLink } from 'react-router-dom'
 import Logos from '../../assets/images/logo.png'
 import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
 import { faIdCard, faPaw, faUserNinja } from '@fortawesome/free-solid-svg-icons'


const Sidebar = () => (
    <div className = 'nav-bar'>
        <Link className='logo' to='/'>
             <img src={Logos} alt="logo" />
        </Link>
        <nav>
            <NavLink exact="true" activeclassname="active" to="/">
                <FontAwesomeIcon icon={faPaw} />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="about-link"to="/about">
                <FontAwesomeIcon icon={faUserNinja} />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="contact-link"to="/contact">
                <FontAwesomeIcon icon={faIdCard} />
            </NavLink>
        </nav>
    </div>
)

export default Sidebar 