import React from 'react';
import { NavLink } from 'react-router-dom';

const NavbarLinksSignedOut = () => {
    return (
        <ul className="right">
            <li>
                <NavLink
                    to="/sign-in"
                    className="blue lighten-4 grey-text text-darken-3"
                >
                    Sign In
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/sign-up"
                    className="blue lighten-4 grey-text text-darken-3"
                >
                    Sign Up
                </NavLink>
            </li>
        </ul>
    );
};

export default NavbarLinksSignedOut;
