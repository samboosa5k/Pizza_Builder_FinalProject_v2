import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import CornerCredits from '../general_components/CornerCredits.jsx';

const NavBar = ( { match } ) => {
    return (
        <>
            <div className="menu-customer">
                <div className="menu-customer__top">
                    <img src="image/pizza_logo.svg" className="menu-customer__logo" alt="jaj-team-logo" />
                </div>
                <div className="menu-customer__menu">

                    <NavLink
                        className="menu-customer__item"
                        activeClassName="menu-customer__item--active"
                        to="/home">Home</NavLink>

                    <NavLink
                        className="menu-customer__item"
                        activeClassName="menu-customer__item--active"
                        to="/magic/builder">Build a Pizza</NavLink>

                    <NavLink
                        className="menu-customer__item"
                        activeClassName="menu-customer__item--active"
                        to='/about'>About</NavLink>

                    <NavLink
                        className="menu-customer__item"
                        activeClassName="menu-customer__item--active"
                        to='/contact'>Contact</NavLink>

                </div>
                <div className="menu-customer__bottom">
                    <CornerCredits />
                </div>
            </div>

        </>
    )
}

export default NavBar;
