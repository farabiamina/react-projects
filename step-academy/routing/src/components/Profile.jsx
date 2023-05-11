import React from 'react';
import Login from "./Login";

const Profile = (props) => {
    return props.authed ? (
        <div>
            <h1>Profile Page</h1>
            <div>
                <img src="https://via.placeholder.com/150?text=Pablo" alt=""/>
                <div>
                    <h2>Pablo Jackson</h2>
                    <p>29 years old...</p>
                </div>
            </div>
        </div>
    ) : (
        <Login authed={props.authed} setAuthed={props.setAuthed}/>
    );
};

export default Profile;