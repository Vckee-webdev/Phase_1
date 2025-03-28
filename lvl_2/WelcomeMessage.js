import React from 'react';

function WelcomeMessage({ isLoggedIn }) {
    return (
        <h2>{isLoggedIn ? "Welcome back!" : "Please log in"}</h2>
    );
}

export default WelcomeMessage;
