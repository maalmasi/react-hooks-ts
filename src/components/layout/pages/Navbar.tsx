import React from 'react';
import {
    NavbarLinksSignedIn,
    NavbarLinksSignedOut,
} from 'components/layout/components';
import { connect } from 'react-redux';
import { useSelector } from 'react-redux';

interface NavbarProps {
    auth: AuthProps;
}

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

const mapStateToProps = (state: any) => {
    return {
        auth: state.firebase.auth,
    };
};

export default connect(mapStateToProps)(Navbar);
