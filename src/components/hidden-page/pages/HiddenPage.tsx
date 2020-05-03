import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

interface HiddenPageProps {}

const HiddenPage: React.FC<HiddenPageProps> = () => {
    const auth = useSelector((state: any) => state.firebase.auth);
    if (!auth.uid) {
        return <Redirect to="/sign-in" />;
    }
    return (
        <div className="container">
            {auth?.email && (
                <p className="center">How did you get here {auth.email}?</p>
            )}
        </div>
    );
};

export default HiddenPage;
