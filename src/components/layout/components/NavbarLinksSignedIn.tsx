import React from 'react';
import { NavLink } from 'react-router-dom';

const NavbarLinksSignedIn = () => {
    return (
        <ul className="right">
            <li>
                <NavLink
                    to="/"
                    className="blue lighten-4 grey-text text-darken-3"
                >
                    Sign Out
                </NavLink>
            </li>
            <li>
                <div className="btn btn-floating blue darken-3">MA</div>
            </li>
        </ul>
    );
};

export default NavbarLinksSignedIn;
