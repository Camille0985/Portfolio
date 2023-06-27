import Logo from '../assets/LOGO.png';
import { Link } from 'react-router-dom';
import '../style/Header';

const Header = () => {
    return(
        <header>
            <img src={Logo} alt='Logo'/>
            <nav>
                <ul>
                    <li><Link to='/'>Accueil</Link></li>
                    <li><Link to='/About'>A propos</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;