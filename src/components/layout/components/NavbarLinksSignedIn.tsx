import React from 'react';
import { signOutAction } from 'components/login-register/actions';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

interface NavbarLinksSignedInProps {}

const NavbarLinksSignedIn: React.FC<NavbarLinksSignedInProps> = () => {
    const dispatch = useDispatch();
    const auth = useSelector((state: any) => state.firebase.auth);
    return (
        <ul className="right">
            <li>
                <NavLink
                    to="/sign-in"
                    className="blue lighten-4 grey-text text-darken-3"
                    onClick={() => dispatch(signOutAction())}
                >
                    Sign Out
                </NavLink>
            </li>
            {auth?.email ? (
                <li>
                    <div className="blue lighten-4 blue-text text-darken-4">
                        {auth.email}
                    </div>
                </li>
            ) : null}
        </ul>
    );
};

export default NavbarLinksSignedIn;
