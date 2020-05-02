import React from 'react';

interface HiddenPageProps {}

const HiddenPage: React.FC<HiddenPageProps> = (props) => {
    return (
        <div className="container">
            <p className="center">Welcome Matija Almaši.</p>
        </div>
    );
};

export default HiddenPage;
