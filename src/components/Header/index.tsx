import * as C from './styles'
import logo from '../../imgs/logo.png';
import menu from '../../imgs/menu.png';

export const Header = () => {
    return (
        <C.Container> 
            <div className='container'>
                <div className='navbar'>
                    <img className='logo' src={logo} alt=''></img>
                    <nav>
                        <ul>
                        <li> <a href="W"> HOME </a></li>
                        <li> <a href="W"> REGION </a></li>
                        <li> <a href="W"> ABOUT </a></li>
                        </ul>
                    </nav>
                    <img className='menu-icon' src={menu} alt=''></img>
                </div>
            </div>
        </C.Container>
    )
}