import React from 'react';
import './profile.css';

export default function Profile(props) {
    const {img, name, age, country, skills} = props.person;
    return (
        <div class="wrapper">
            <img src={img} alt="person"/>
            <p>Name: <span>{name}</span></p>
            <p>Age: <span>{age}</span></p>
            <p>Country: <span>{country}</span></p>
            <p>Skills:</p> 
            <div id="skills">
            {
                skills.map(skill => (
                    <li>{skill}</li>
                ))
            }              
           </div>
        </div>
    )
}