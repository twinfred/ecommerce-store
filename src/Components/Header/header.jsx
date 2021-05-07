import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../Images/Header/crown.svg';

import './header.scss';

const Header = () => (
  <nav className="header">
    <Link to="/" className="header__logo-link">
      <Logo className="header__logo"/>
    </Link>
    <div className="header__menu">
      <Link to="/shop" className="header__menu-link">Shop</Link>
      <Link to="/contact" className="header__menu-link">Contact</Link>
    </div>
  </nav>
)

export default Header;