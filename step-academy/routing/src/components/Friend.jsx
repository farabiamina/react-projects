import React from 'react';

const Friend = ({friend}) => {
    return (
        <div className="container">
            <img src={friend.img} alt=""/>
            <div><b>{friend.name}</b></div>
            <div><b>Age: </b>{friend.age}</div>
            <div><b>Country: </b>{friend.country}</div>
        </div>
    );
};

export default Friend;