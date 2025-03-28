import React from 'react';

function UserMessage({ role }) {
    let message;

    if (role === 'Admin') {
        message = <h3>Welcome, Admin! You have full access.</h3>;
    } else if (role === 'User') {
        message = <h3>Welcome, User! You have limited access.</h3>;
    } else {
        message = <h3>Welcome, Guest! Please log in.</h3>;
    }

    return <div>{message}</div>;
}

export default UserMessage;
