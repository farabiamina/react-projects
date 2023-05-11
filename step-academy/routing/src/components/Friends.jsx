import React from 'react';
import Login from "./Login";
import Friend from "./Friend";
import {Link} from "react-router-dom";
import {Outlet} from "react-router-dom"

const Friends = (props) => {

    return props.authed ? (
        <div className="wrapper">
            <ul>
                {
                    props.friends.map((friend) => (
                        <li>
                            <Link to={friend.name} >{friend.name}</Link>
                        </li>
                    ))
                }
            </ul>
            < Outlet />
        </div>

    ) : (
        <Login authed={props.authed} setAuthed={props.setAuthed} />
    );
};

export default Friends;