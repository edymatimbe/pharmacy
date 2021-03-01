import React from 'react';
import {Link} from 'react-router-dom';
import Logo from './../imgs/logo.png'

const NavCenter = () => {
    return (
        <nav className="navbar">
            <div className="navbar__logo">
                <Link to="/">
                    <img src={Logo} alt="Logo From Website"/>
                </Link>
            </div>
  

            <form action="#" className="search">
                <input type="text" className="search__input" placeholder="Procurando por..." />
                <button className="search__button">

                </button>
            </form>

            <ul className="navbar__list">
                <li className="navbar__item">
                    <Link to='/' className="navbar__link">Home</Link>
                </li>
                 <li className="navbar__item">
                    <Link to='/cart' className="navbar__link">New</Link>
                </li>
            </ul>
        </nav>
    );
}

export default NavCenter;