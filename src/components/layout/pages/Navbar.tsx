import React from 'react';
import {
    NavbarLinksSignedIn,
    NavbarLinksSignedOut,
} from 'components/layout/components';
import { useSelector } from 'react-redux';

interface NavbarProps {}

interface AuthProps {
    uid: string;
    email: string;
}

const Navbar: React.FC<NavbarProps> = () => {
    const auth = useSelector((state: any) => state.firebase.auth);
    return (
        <nav className="nav wrapper blue lighten-4">
            <div className="container">
                <span className="grey-text text-darken-3">React Hooks TS</span>
                {auth?.uid ? <NavbarLinksSignedIn /> : <NavbarLinksSignedOut />}
            </div>
        </nav>
    );
};

export default Navbar;
