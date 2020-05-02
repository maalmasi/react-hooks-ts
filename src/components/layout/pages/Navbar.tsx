import React from 'react';
import { Link } from 'react-router-dom';
import {
    NavbarLinksSignedIn,
    NavbarLinksSignedOut,
} from 'components/layout/components';

const Navbar = () => {
    return (
        <nav className="nav wrapper blue lighten-4">
            <div className="container">
                <Link to="/" className="grey-text text-darken-3">
                    React Hooks TS
                </Link>
                <NavbarLinksSignedIn />
                <NavbarLinksSignedOut />
            </div>
        </nav>
    );
};

export default Navbar;
