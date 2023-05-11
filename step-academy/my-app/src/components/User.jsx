import React, {useEffect, useRef, useState} from 'react';

const User = () => {

    const nameField = useRef(null);
    const [name, setName] = useState("Anna");
    const [age, setAge] = useState(30);

    useEffect(() => {
       document.title = `${name}`;
       // console.log("useEffect вызван");
        //   Вызывается каждый раз когда меняется любой state
    },
        [name]);

    const change = () => {
        console.log(name);
        setName(nameField.current.value);
    }

    const ageChange = (event) => {
        setAge(event.target.value);
    }


    return (
        <div>
            <p>Name: <input
                type="text"
                onChange={change}
                value={name}
                ref={nameField}
            /></p>
            <p>Age: <input type="number" onChange={ageChange} value={age}/></p>
        </div>
    );
};

export default User;