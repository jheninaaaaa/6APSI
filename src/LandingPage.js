import React, { useState } from 'react';
import './LandingPage.css';
import LoginPage from './LoginPage.js';

function LandingPage() {
    const [goTo, setGoTo] = useState(false);
    const GoToLogin = (val) => {
        setGoTo(true)
    };

    if (goTo){
        return <LoginPage/>;
    };

    return (
        <div className="landingContainer">
            <div className="content">
                <div className="slogan">
                    <h2>Hello, World!</h2>
                    <h2><strong>Be good to me</strong></h2>
                </div>
            </div>
            <button onClick={GoToLogin}>Get Started</button>
        </div>
    );
}

export default LandingPage;
