import { Outlet } from 'react-router-dom';
import Sidebar from '../Sidebar'
import './index.scss'


const Layout = () => {
    return(
    <div classname = "App">
        <Sidebar />
        <div className = 'page'>
            <span className = 'tags top-tags'>class MyPortfolio{'{'}
            </span>
            <Outlet/>
        </div>
    </div>                  
    )
}


export default Layout
