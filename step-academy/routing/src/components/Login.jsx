import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";

const Login = (props) => {
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const [valid, setValid] = useState(true);
    const navigate = useNavigate();

    const submit = () => {
        if (login === "Pablo" && password === "qwerty") {
            setValid(true);
            props.setAuthed(true);
            navigate("/");
        }
        else {
            setValid(false);
        }
    }

    return (
        <div class="form">
            <form>
                <h1>Login Page</h1>
                <label>User</label>
                <input value={login} onChange={(e)=>setLogin(e.target.value)} type="text" placeholder="login"/>
                <pre>The correct username is: Pablo</pre>
                <label>Password</label>
                <input type="password" onChange={(e)=>setPassword(e.target.value)} placeholder="password"/>
                <pre>The correct password is: qwerty</pre>
            </form>
            <button onClick={submit}>Submit</button>
            {!valid && <p className="warning">Username or password is not correct</p>}
        </div>
    );
};

export default Login;