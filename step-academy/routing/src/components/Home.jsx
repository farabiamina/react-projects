import React from 'react';

const Home = (props) => {
    return !props.authed ? (
        <div>
            <h2>Welcome to the homepage!</h2>
            <h3>You are not authed! Please login in to the system</h3>
        </div>) : (
        <div>
            <h2>Welcome to the homepage!</h2>
            <h3>You have successfully authed in your account!</h3>
            <h3>You can now enter your pages</h3>
        </div>
    );
};

export default Home;