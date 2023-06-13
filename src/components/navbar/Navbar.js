import './navbar.scss'
import { Link } from 'react-router-dom'

export default function Navbar() {

    const currentRoute = window.location.pathname;

    return (
        <nav className='nav'>
            <ul className='nav_list'>
                <li className={currentRoute === '/Kasa/' ? 'nav_list_item_active' : 'nav_list_item'}>
                    <Link  to='/Kasa/'>
                        Accueil
                    </Link>
                </li>
                <li className={currentRoute === '/Kasa/about' ? 'nav_list_item_active' : 'nav_list_item'}>
                    <Link  to='/Kasa/about'>
                        A propos
                    </Link>
                </li>
            </ul>
        </nav>
    )
}
