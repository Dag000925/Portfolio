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

            <span className = 'tags bottom-tags'>Public static void main{'(String[] args){'}
            <br />
            <span className='middle-tag-html'>System.out.print{'('}</span>
            </span>
            <span className='tags very-bottom-tags'>{');'}</span>
            <br />
            <span className='tags very2-bottom-tags'>{'}'}</span>
            <br />
            <span className='tags very3-bottom-tags'>{'}'}</span>
        </div>
    </div>
    )
}

export default Layout